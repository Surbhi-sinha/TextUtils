import React from 'react'

export default function Alert(props) {
      const capitalise=(text)=>{
            const lower = text.toLowerCase();
            return lower.charAt(0).toUpperCase()+lower.substring(1)
      }
      return (
            <div style={{height:'50px'}}>

                  {/* // need to do this because the initial value is null */}
                  {props.alert && <div>
                        <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                              <strong>{capitalise(props.alert.type)}</strong> : {props.alert.msg}

                        </div>
                  </div>}
            </div>
      )
}
