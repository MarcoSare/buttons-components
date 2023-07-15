//import React from 'react';
//import '../styles/home.css'

interface MyObject {
    [key: string]: string|null;
  }

const LineCode = ({tag, text, prop, noLine}: { tag:string,text?:string, prop?:MyObject, noLine:number}) =>{
    return <div className="row-code">
      <p key={noLine}>
    <span className="p">&lt;</span>
    <span className="nt">{tag}</span>
    {prop!==undefined?
        Object.entries(prop).map(([key, value], index)=>(
            <>
            <span key={`key ${index}`} className="pr">&nbsp;{key}{value!==null?'=':''}</span>
            <span key={`value ${index}`} className="st">{value!==null?'"':''}{value}{value!==null?'"':''}</span>
            </>
        )):''}
    <span className="p">&gt;</span>
    <span className="tx">{text}</span>
    <span className="p">&lt;/</span>
    <span className="nt">{tag}</span>
    <span className="p">&gt;</span>
    </p>
  </div>
}

export default LineCode;