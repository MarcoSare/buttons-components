//import { useState } from 'react'
import Button from "../components/btn"
import LineCode from "../components/line_code"
//import '../styles/home.css'
/*
const gird:object = {
    'display' : 'flex',
    'flex-direction' : 'column'
}
*/

const Home = () => {
  return <section className="section-home container">
    <h1 className="title">Buttons</h1>
    <h2>Variants</h2>
    <div className="row-border mb-1">
      <Button>Default</Button>
      <Button
        variant="outline"
      >Outline</Button>
      <Button
        variant="text"
      >Text</Button>
    </div>
    <div className="column-code mb-2">
      <LineCode
      tag="Button"
      text="Default"
      noLine={1}
      />

    <LineCode
      tag="Button"
      text="Outline"
      prop={{variant: 'outline'}}
      noLine={2}
      />
      <LineCode
      tag="Button"
      text="Text"
      prop={{variant: 'text'}}
      noLine={3}
      />     
    </div>

    <h2>Colors</h2>
    <div className="row-border mb-1">
      <Button color="default">Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
    </div>
    <div className="column-code mb-2">
    <LineCode
      tag="Button"
      text="Default"
      prop={{color: 'default'}}
      noLine={4}
    />
    <LineCode
      tag="Button"
      text="Primary"
      prop={{color: 'primary'}}
      noLine={5}
    />
    <LineCode
      tag="Button"
      text="Secondary"
      prop={{color: 'secondary'}}
      noLine={6}
    /> 

<LineCode
      tag="Button"
      text="Success"
      prop={{color: 'success'}}
      noLine={7}
    /> 

<LineCode
      tag="Button"
      text="Warning"
      prop={{color: 'warning'}}
      noLine={8}
    /> 

<LineCode
      tag="Button"
      text="Danger"
      prop={{color: 'danger'}}
      noLine={9}
    /> 
      
     
    </div>
    
    <h2>Sizes</h2>

    <div className="row-border mb-1">
      <Button size="sm" color="primary" >Small</Button>
      <Button size="md" color="primary">Medium</Button>
      <Button size="lg" color="primary">Large</Button>
    </div>

    <div className="column-code mb-2">
    <LineCode
      tag="Button"
      text="Small"
      prop={{size: 'sm', color : 'primary'}}
      noLine={10}
    />

<LineCode
      tag="Button"
      text="Medium"
      prop={{size: 'md', color : 'primary'}}
      noLine={12}
    />

<LineCode
      tag="Button"
      text="Large"
      prop={{size: 'lg', color : 'primary'}}
      noLine={12}
    />
    </div>


    <h2>Icons</h2>
    <div className="row-border mb-1">
      <Button color="primary" startIcon="local_grocery_store">Default</Button>
      <Button color="primary" endIcon="local_grocery_store">Default</Button>
      <Button color="primary" startIcon="local_grocery_store"></Button>
    </div>
    <div className="column-code mb-2">
    <LineCode
      tag="Button"
      text="Default"
      prop={{startIcon: 'local_grocery_store', color : 'primary'}}
      noLine={13}
    />

<LineCode
      tag="Button"
      text="Default"
      prop={{endIcon: 'local_grocery_store', color : 'primary'}}
      noLine={14}
    />

<LineCode
      tag="Button"
      
      prop={{startIcon: 'local_grocery_store', color : 'primary'}}
      noLine={15}
    />
    </div>

   

    <h2>Disabled</h2>

    <div className="row-border mb-1">
      <Button disabled color="default">Default</Button>
      <Button disabled color="primary">Primary</Button>
      <Button disabled color="secondary">Secondary</Button>
      <Button disabled color="success">Success</Button>
      <Button disabled color="warning">Warning</Button>
      <Button disabled color="danger">Danger</Button>
    </div>
    <div className="column-code mb-2">
    <LineCode
      tag="Button"
      text="Default"
      prop={{disabled: null, color : 'default'}}
      noLine={16}
    />

<LineCode
      tag="Button"
      text="Primary"
      prop={{disabled: null, color : 'primary'}}
      noLine={17}
    />

<LineCode
      tag="Button"
      text="Secondary"
      prop={{disabled: null, color : 'secondary'}}
      noLine={18}
    />

<LineCode
      tag="Button"
      text="Success"
      prop={{disabled: null, color : 'success'}}
      noLine={19}
    />

<LineCode
      tag="Button"
      text="Warning"
      prop={{disabled: null, color : 'warrning'}}
      noLine={20}
    />

<LineCode
      tag="Button"
      text="Danger"
      prop={{disabled: null, color : 'danger'}}
      noLine={21}
    />




    </div>



    <h2>Disabled shadow</h2>

    <div className="row-border mb-1">
      <Button disableShadow>Default</Button>
      <Button disableShadow variant="outline">Default</Button>
      <Button disableShadow variant="text">Default</Button>
    </div>
    <div className="column-code mb-4">
    <LineCode
      tag="Button"
      text="Default"
      prop={{disableShadow: null}}
      noLine={22}
    />

<LineCode
      tag="Button"
      text="Outline"
      prop={{disableShadow: null, variant : 'outline'}}
      noLine={23}
    />

<LineCode
      tag="Button"
      text="Text"
      prop={{disableShadow: null, variant : 'text'}}
      noLine={24}
    />


    </div>


  <div className="mb-1">
    <p className="footer-text mb-1">
    Icons:  <a className="footer-text" href="https://material.io/resources/icons/?style=round">https://material.io/resources/icons/?style=round</a>
    </p>
  <p>
    created by MarcoSare - devChallenges.io
    </p>
  </div>
   

  </section>
  
  

}


export default Home