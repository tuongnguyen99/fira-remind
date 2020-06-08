import React from 'react';

const File = ({ name, label, fileName, labelIcon, helpText }) => {
  return (
    <div class='form-group'>
      <label>
        <i class={`fas ${labelIcon} mr-2`}></i>
        {label}
      </label>
      <div class='custom-file'>
        <input
          type='file'
          name={name}
          class='custom-file-input'
          id='customFile'
        />
        <label class='custom-file-label' for='customFile'>
          {fileName}
        </label>
      </div>
      <small id='fileHelpId' class='form-text text-muted'>
        {helpText}
      </small>
    </div>
  );
};

export default File;
