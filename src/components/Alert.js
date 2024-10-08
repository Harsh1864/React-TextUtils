import React from 'react'

function Alert(props) {
  const cap = (word) =>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    <>
      <div style={{ height: '60px' }}>
        {props.alert && props.alert.type && (
          <div className={`alert alert-${props.alert.type} alert-dismissible fade show my-2`} role="alert">
            <strong>{cap(props.alert.type)}</strong>: {props.alert.msg}
          </div>
        )}
      </div>
    </>
  )
}

export default Alert
