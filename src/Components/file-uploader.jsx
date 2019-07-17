import React, { Component } from 'react'
import './scss/file-uploader.scss'
import { stdb } from '../Shared/Globals';
import uploadIcon from '../Components/assets/img/avatars/upload.png'
import { connect } from 'react-redux';

export class FileUploader extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             selectedFilesPrev : [],
             filesPreviewAble : false,
             multiple : false,
             showLoaders : false,
             currentIndex : 0,
             uploadNowBtn : 'Upload Now',
             currentRoute : null
        }
        this.removeFile = this.removeFile.bind(this)
        this.buttonUpload = this.buttonUpload.bind(this)
        this.handleUploadingFiles = this.handleUploadingFiles.bind(this)
        this.cropImage = this.cropImage.bind(this)
    }

    componentDidMount(){
        this.dragEvents();
        (/(register)/gi.test(window.location.href)) ? this.setState({ currentRoute : 'auth' }) : 
        ((/(app)/gi.test(window.location.href)) ? this.setState({ currentRoute : 'chat' }) : this.setState({ currentRoute : null })) 
    }

    dragEvents(){
        const statusDropzone = document.querySelector('.file-uploader-page');
        let files = []
        const events = [
          'dragenter',
          'dragleave',
          'dragover', // to allow drop
          'drop'
        ];
        events.forEach(e => {
          statusDropzone.addEventListener(e, (ev) => {
            ev.preventDefault();
            if (ev.type === 'dragenter') {
              ev.target.classList.add('blue-border');
            }
            if (ev.type === 'dragleave') {
              ev.target.classList.remove('blue-border');
            }
            if(ev.type === 'drop') {
              ev.target.classList.remove('blue-border');
              [].slice.call(ev.dataTransfer.files).map(f => {
                files.push(f)
                return 0;
              });
              let i = 0;
              files.map( f => {
                this.generatePreviewData(f, (prev) => {
                    i++;
                    this.state.selectedFilesPrev.push({
                        meta : f,
                        img : prev,
                        progress : {
                            percent : 0,
                            upoaded : false,
                            bt : 0
                        },
                        imgURL : null
                    })
                    if(i === files.length){
                        this.setState({
                            filesPreviewAble : true
                        })
                    }
                })
                return 0;
              })
            }
          })
        })
    }

    buttonUpload(event){
        let object = event.target.files;
        let files = []
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                const element = object[key];
                files.push(element)
            }
        }
        let i = 0;
        files.map( f => {
          this.generatePreviewData(f, (prev) => {
              i++;
              this.state.selectedFilesPrev.push({
                  meta : f,
                  img : prev,
                  progress : {
                      percent : 0,
                      upoaded : false,
                      bt : 0
                  },
                  imgURL : null
              })
              if(i === files.length){
                  this.setState({
                      filesPreviewAble : true
                  })
              }
          })
          return 0;
        })
    }

    generatePreviewData(file, callback){
        const fr = new FileReader();
        fr.addEventListener('load', (e) => {
          if(callback && typeof callback === 'function') callback(fr.result);
        });
        fr.readAsDataURL(file);
    }

    removeFile(event){
        const el = document.querySelector('.fp-files');
        const l = el.children.length;
        el.removeChild( el.children[Array.from(el.children).indexOf( event.currentTarget.parentNode.parentNode )] );
        if(l === 1){
            this.setState({
                filesPreviewAble : false,
                selectedFilesPrev : []
            })
        }
    }
    
    formatFileSize(bytes){
        if( bytes === 0) {
          return '0 B';
        }
        const k = 1000;
        const dm = 2;
        const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    handleUploadingFiles(){
        this.setState({
            uploadNowBtn : 'Uploading '
        })
        console.log(this.state.selectedFilesPrev)
        this.setState({ showLoaders : true })
        this.state.selectedFilesPrev.map( (file, idx) => {
            let task = stdb.ref(`Images/${file.meta.name}`).put(file.meta);
            task.on('state_changed', snapshot => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                let st = {...this.state.selectedFilesPrev}
                st[idx].progress.percent = progress;
                st[idx].progress.bt = this.formatFileSize(snapshot.bytesTransferred);
                this.setState({
                    st
                })
            },
            error => {
                console.log(error)
            },
            () => {
                stdb.ref('Images').child(file.meta.name).getDownloadURL().then( url => {
                    let st = {...this.state.selectedFilesPrev}
                    st[idx].progress.uploaded = true
                    st[idx].imgURL = url
                    this.setState({
                        st
                    })
                    this.props.onFileUploaded(url)
                })
            }) 
        })
    }

    cropImage(){
        // new cropper('#crop-img',{
        //     maxSize : [50, 50, '%'],
        //     startSize : [50, 50, '%'],
        //     aspectRatio: 1,
        //     onCropStart: function(value) {
        //         console.log(value.x, value.y, value.width, value.height);
        //     },
        //     onCropMove: function(value) {
        //         console.log(value.x, value.y, value.width, value.height);
        //     },
        //     onCropEnd: function(value) {
        //         console.log(value.x, value.y, value.width, value.height);
        //     }
        // })
    }
    
    render() {
        if(!this.state.filesPreviewAble){
            return (
                <div className='container' >
                    <div className='file-uploader-page' >
                        <div className='upload-icon'> <img src={uploadIcon} alt='upload'/> </div>
                        <p> Drag and Drop Files </p>
                        <p className='orSeparate'>Or</p>
                        <div className='files-upload-btn'>
                            <input type='file' id='file-upload' multiple={this.state.multiple} onChange={this.buttonUpload}/>
                            <label htmlFor='file-upload' className='rcaBtn'> Upload Files </label>
                        </div>
                    </div>
                </div>
            )
        } else if(this.state.filesPreviewAble && this.state.currentRoute === 'chat'){

            return (
                <div className='container'>
                    <div className='files-preview container-fluid' >
                    <div className='fp-head'> Files to be Uploaded </div>
                    <div className='fp-files'>
                        {
                            this.state.selectedFilesPrev.map( (e, i) => {
                                return (
                                    <div className='single-file row' key={i}>
                                        <div className='file-preview col-2'>
                                            <img src={e.img} alt='icon' />
                                        </div>
                                        <div className='file-meta col-9'>
                                            <span className='file-name'> {e.meta.name} </span>
                                            <span className='file-size'>
                                            {this.state.showLoaders ? <span className='bt'>{e.progress.bt}/</span> : ''}
                                            {this.formatFileSize(e.meta.size)} - {e.meta.type}
                                            {e.progress.uploaded ? <span> - Uploaded</span> : ''}
                                            </span>
                                        </div>
                                        <div className='file-close col-1'> <span onClick={this.removeFile}>×</span> </div>
                                        {
                                            this.state.showLoaders ?
                                                <div className='file-uploading-bar'> <div className='fub-uploaded' style={{width : `${e.progress.percent}%`}}></div> </div>
                                            : ''
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='fp-upload'>
                        <button className='rcaBtn' onClick={this.handleUploadingFiles}>Upload Now</button>
                    </div>
                    </div>
                </div>
            )
        } else if(this.state.filesPreviewAble && this.state.currentRoute === 'auth'){
            return (
                <div className='container'>
                    <div className='img-cropper'>
                        <div className='selected-img'>
                            <img src={this.state.selectedFilesPrev[0].img} alt='icon' id='crop-img'/>
                            {
                                (this.state.showLoaders === true) ? <div className='profile-loader'> <div className='pl-bar' style={{width : `${this.state.selectedFilesPrev[0].progress.percent}%`}}></div> </div> : ''
                            }
                            <div className='profile-uploader'>
                                <button className='rcaBtn' onClick={this.handleUploadingFiles} disabled={this.state.showLoaders}> {this.state.uploadNowBtn} 
                                    { this.state.showLoaders ? <span> {Math.round(this.state.selectedFilesPrev[0].progress.percent)}% </span> : '' }
                                </button>
                            </div>
                        </div>
                    </div>                    
                </div>
                
            )
        }

    }
}

function mapToStateProps(){
    return({})
}
function mapToDispatchProps(dispatch){
    return({
        onFileUploaded : (data) =>{
            dispatch({
                type : 'PROFILE_PIC_UPDATED',
                payload : data
            })
        }
    })
}
export default connect(mapToStateProps, mapToDispatchProps)(FileUploader)
