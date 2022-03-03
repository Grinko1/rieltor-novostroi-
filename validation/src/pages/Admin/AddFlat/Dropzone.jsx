import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxwidth: '480px',
  marginBottom: '30px',
  minHeight: '100px',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  transition: 'border .3s ease-in-out'
  // @media(max-width: 420px){

  // }
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

function DropzoneComponent(props) {
//   const [files, setImages] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    props.setFiles(
       acceptedFiles.map(file => Object.assign(file,
       {
      preview: URL.createObjectURL(file)
    }
    ))
    );
   
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png, image/jpg'
  });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  const thumbs = props.files.map(file => (
    <div key={file.name} style={{marginLeft:'5px'}}>
      <img
        style={{width:'50px', height:'50px'}}
        src={file.preview}
        alt={file.name}
      />
    </div>
  ));

  // clean up
  useEffect(() => () => {
    props.files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [props.files]);

  return (
    <section>
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <div>Вставте изображения.</div>
      </div>
      <aside  style={{width:'600px', display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
        {thumbs}
      </aside>
    </section>
  )
}

export default DropzoneComponent;