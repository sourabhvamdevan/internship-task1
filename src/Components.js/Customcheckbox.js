import React, { useState } from 'react'
import "../App.css"
export default function Customcheckbox() {

  let errval={
    name:"errand",
    value:false
  };
  let Errands_emergenciesval={
    name:"Errands-emergencies",
    value:false
  };
  let Errands_occasionalval={
    name:"Errands-occasional",
    value:false
  };
  let Errands_freequentlyval={
    name:"Errands-freequently",
    value:false
  };

  let childcareval ={
    name:"Childcare",
    value:false
  };
  let Childcare_emergenciesval ={
    name:"Childcare-emergencies",
    value:false
  };
  let Childcare_occasionalval ={
    name:"Childcare-occasional",
    value:false
  };
  let Childcare_freequentlyval ={
    name:"Childcare-freequently",
    value:false
  };
  let eldercareval={
    name:"Eldercare",
    value:false
  };
  let Eldercare_emergenciesval={
    name:"Eldercare-emergencies",
    value:false
  };
  let Eldercare_occasionalval={
    name:"Eldercare-occasional",
    value:false
  };
  let Eldercare_freequentlyval={
    name:"Eldercare-freequently",
    value:false
  };
  let petcareval={
    name:"Petcare",
    value:false
  };
  let Petcare_emergenciesval={
    name:"Petcare-emergencies",
    value:false
  };
  let Petcare_occasionalval={
    name:"Petcare-occasional",
    value:false
  };
  let Petcare_freequentlyval={
    name:"Petcare-freequently",
    value:false
  };
  
  let walkingval={
    name:"walking",
    value:false
  };
  let runningval={
    name:"running",
    value:false
  };
  let bicyclingval={
    name:"bicycling",
    value:false
  };
  let dogwalkingval={
    name:"dogwalking",
    value:false
  };
  let Gardeningval={
    name:"gardening",
    value:false
  };
  let swimmingval={
    name:"swimming",
    value:false
  };
  let drawingval={
    name:"drawing",
    value:false
  };
  let Cookoutsval={
    name:"cookout",
    value:false
  };
  let blockpartiesval={
    name:"blockparties",
    value:false
  };
  let dinnerpartiesval={
    name:"dinnerparties",
    value:false
  };
  let computergamesval={
    name:"computergame",
    value:false
  };
  let readinggroupsval={
    name:"readinggroups",
    value:false
  };
  let restaurantsval={
    name:"restaurants",
    value:false
  };
  let moviesval={
    name:"movies",
    value:false
  };
  let shoppingval={
    name:"shopping",
    value:false
  };
  let walking_slow={
    name: "walking-slow",
    value:false
  };
  let walking_Moderate={
    name: "walking-Moderate",
    value:false
  };
  let walking_fast={
    name: "walking-fast",
    value:false
  };
  let running_slow={
    name: "running-slow",
    value:false
  };
  let running_Moderate={
    name: "running-Moderate",
    value:false
  };
  let running_fast={
    name: "running-fast",
    value:false
  };
  let movies_action={
    name: "movie-action",
    value:false
  };
  let movies_romance={
    name: "movies-romance",
    value:false
  };
  let movies_comedy={
    name: "movies-comedy",
    value:false
  };
  let movies_sciencefiction={
    name: "movies-sciencefiction",
    value:false
  };
  let movies_indie={
    name: "movies-indie",
    value:false
  };
  let shopping_groceries={
    name: "shopping-groceries",
    value:false
  };
  let shopping_clothing={
    name: "shopping-clothing",
    value:false
  };
  let shopping_books={
    name: "shopping-books",
    value:false
  };
  let [namevalue,setNamevalue]=useState();
  let [emailvalue,setEmailvalue]=useState();
  let [subsvalue,setSubsvalue]=useState();
  
    function clicked(e){
    const newentry={
      name:e.target.name,
      value:e.target.checked
    }
    console.log(newentry)
    if (e.target.name == "walking"){

      e.target.checked ? document.querySelector(".walking-options").style.display = "flex" : document.querySelector(".walking-options").style.display = "none";
      walkingval=newentry;
    }
    if(e.target.name=="walking_slow"){
      walking_slow=newentry;
    }
    if(e.target.name=="walking_Moderate"){
      walking_Moderate=newentry;
    }
    if(e.target.name=="walking_fast"){
      walking_fast=newentry;
    }
    if (e.target.name == "running"){
      
      e.target.checked ? document.querySelector(".running-options").style.display = "flex" : document.querySelector(".running-options").style.display = "none";
      runningval=newentry
    }
    if(e.target.name=="running_slow"){
      running_slow=newentry;
    }
    if(e.target.name=="running_Moderate"){
      running_Moderate=newentry;
    }
    if(e.target.name=="running_fast"){
      running_fast=newentry;
    }
    if(e.target.name=="bicycling"){
      bicyclingval=newentry;
    }
    if(e.target.name=="dogwalking"){
      dogwalkingval=newentry;
    }
    if(e.target.name=="gardening"){
      Gardeningval=newentry;
    }
    if(e.target.name=="swimming"){
      swimmingval=newentry;
    }
    if(e.target.name=="drawing"){
      drawingval=newentry;
    }
    if(e.target.name=="cookouts"){
      Cookoutsval=newentry;
    }
    if(e.target.name=="blockparties"){
      blockpartiesval=newentry;
    }
    if(e.target.name=="dinnerparties"){
      dinnerpartiesval=newentry;
    }
    if(e.target.name=="computergames"){
      computergamesval=newentry;
    }
    if(e.target.name=="readinggroups"){
      readinggroupsval=newentry;
    }
    if(e.target.name=="restaurants"){
      restaurantsval=newentry;
    }
    if (e.target.name == "movies"){

      e.target.checked ? document.querySelector(".movies-options").style.display = "flex" : document.querySelector(".movies-options").style.display = "none";
      moviesval=newentry;
    }
    if(e.target.name=="movies_action"){
      movies_action=newentry;
    }
    if(e.target.name=="movies_romance"){
      movies_romance=newentry;
    }
    if(e.target.name=="movies_comedy"){
      movies_comedy=newentry;
    }
    if(e.target.name=="movies_sciencefiction"){
      movies_sciencefiction=newentry;
    }
    if(e.target.name=="movies_indie"){
      movies_indie=newentry;
    }
    if (e.target.name == "shopping"){

      e.target.checked ? document.querySelector(".shopping-options").style.display = "flex" : document.querySelector(".shopping-options").style.display = "none";
      shoppingval=newentry;
    }
    if(e.target.name=="shopping_groceries"){
      shopping_groceries=newentry;
    }
    if(e.target.name=="shopping_clothing"){
      shopping_clothing=newentry;
    }
    if(e.target.name=="shopping_books"){
      shopping_books=newentry;
    }
        if (e.target.name == "Errands"){

          e.target.checked ? document.querySelector(".Errands-options").style.display = "flex" : document.querySelector(".Errands-options").style.display = "none"; 
          errval=newentry;
        }
        if(e.target.name=="Errands_emergencies"){
          Errands_emergenciesval=newentry;
        }
        if(e.target.name=="Errands_occasional"){
          Errands_occasionalval=newentry;
        }
        if(e.target.name=="Errands_freequently"){
          Errands_freequentlyval=newentry;
        }
        if (e.target.name == "Childcare"){
          
          e.target.checked ? document.querySelector(".Childcare-options").style.display = "flex" : document.querySelector(".Childcare-options").style.display = "none"; 
          // e.target.checked?childcareval="true":childcareval="false";
          childcareval=newentry;

        }
        if (e.target.name == "Childcare_emergencies"){
          Childcare_emergenciesval=newentry;
        }
        if (e.target.name == "Childcare_occasional"){
          Childcare_occasionalval=newentry;
        }
        if (e.target.name == "Childcare_freequently"){
          Childcare_freequentlyval=newentry;
        }
        if (e.target.name == "Eldercare"){
          
          e.target.checked ? document.querySelector(".Eldercare-options").style.display = "flex" : document.querySelector(".Eldercare-options").style.display = "none"; 
          // e.target.checked?eldercareval="true":eldercareval="false";
          eldercareval=newentry;
        }
        if (e.target.name == "Eldercare_emergencies"){
          Eldercare_emergenciesval=newentry;
        }
        if (e.target.name == "Eldercare_occasional"){
          Eldercare_occasionalval=newentry;
        }
        if (e.target.name == "Eldercare_freequently"){
          Eldercare_freequentlyval=newentry;
        }
        if (e.target.name == "Petcare"){
          
          e.target.checked ? document.querySelector(".Petcare-options").style.display = "flex" : document.querySelector(".Petcare-options").style.display = "none"; 
          // e.target.checked?petcareval="true":petcareval="false";
          petcareval=newentry;
        }
        if (e.target.name == "Petcare_emergencies"){
          Petcare_emergenciesval=newentry;
        }
        if (e.target.name == "Petcare_occasional"){
          Petcare_occasionalval=newentry;
        }
        if (e.target.name == "Petcare_freequently"){
          Petcare_freequentlyval=newentry;
        }


       
    }
    function gettypedcontent(e){
      // console.log(e.target.value);
      setNamevalue(e.target.value);

    }
    function gettypedemailcontent(e){
      // console.log(e.target.value);
    setEmailvalue(e.target.value);

    }
    function gettypedsubs(e){
      setSubsvalue(e.target.value);
      // console.log(subsvalue)
    }
    function submitted(e){
      e.preventDefault();
      console.log("yo");
      console.log("name-->",namevalue);
      console.log("email-->",emailvalue);
      console.log("subjects-->",subsvalue);
      const contributionarray=[walkingval,walking_slow,walking_Moderate,walking_fast,runningval,running_slow,running_Moderate,running_fast,bicyclingval,dogwalkingval,Gardeningval,swimmingval,drawingval,Cookoutsval,blockpartiesval,dinnerpartiesval,computergamesval,readinggroupsval,restaurantsval,moviesval,movies_action,movies_romance,movies_comedy,movies_sciencefiction,movies_indie,shoppingval,shopping_groceries,shopping_clothing,shopping_books,errval,Errands_emergenciesval,Errands_occasionalval,Errands_freequentlyval,childcareval,Childcare_emergenciesval,Childcare_occasionalval,Childcare_freequentlyval,eldercareval,Eldercare_emergenciesval,Eldercare_occasionalval,Eldercare_freequentlyval,petcareval,Petcare_emergenciesval,Petcare_occasionalval,Petcare_freequentlyval];
      // console.log(contributionarray);
      const printingarray = contributionarray.map((obj)=>{
        return console.log(obj.name,"-->",obj.value)
      })
      // props.printarray(contributionarray);
    }
  return (
    <div>
      <form autoComplete='off' onSubmit={submitted}>

      <section className="app">
        <input type='text' className='typeinput' placeholder='name' name='name' onChange={gettypedcontent} required/>
        <input type='text' className='typeinput' placeholder='email' name='email' onChange={gettypedemailcontent} required/>
        <div className='first-section'>

        <div className='expand-checkbox'>

          <i className="fa fa-rocket"></i>
          <article className="feature1">
            <input onClick={clicked} type="checkbox" id="feature1" name='walking' />
            <div>
              <span>
                Walking
              </span>
            </div>
          </article>
          <div className='walking-options'>
            <div className='options-text'>Choose Walking speed</div>
            <div className='walking-options-inside'>

            <article className="feature1">
              <input onClick={clicked} type="checkbox" id="feature3" name='walking_slow' />
              <div>
                <span>
                  Slow
                </span>
              </div>
            </article>
            <article className="feature1">
              <input onClick={clicked} type="checkbox" id="feature3" name='walking_Moderate' />
              <div>
                <span>
                  Moderate
                </span>
              </div>
            </article>
            <article className="feature1">
              <input onClick={clicked} type="checkbox" id="feature3" name='walking_fast' />
              <div>
                <span>
                  Fast
                </span>
              </div>
            </article>
            </div>
          </div>
        </div>
        {/* <article className="feature2">
          <input onClick={clicked} type="checkbox" id="feature2" name='running' />
          <div>
          <span>
          Running
          </span>
          </div>
        </article> */}

<div className='expand-checkbox'>

<i className="fa fa-rocket"></i>
<article className="feature2">
  <input onClick={clicked} type="checkbox" id="feature2" name='running' />
  <div>
    <span>
      Running
    </span>
  </div>
</article>
<div className='running-options'>
  <div className='options-text'>Choose Running speed</div>
  <div className='running-options-inside'>

  <article className="feature2">
    <input onClick={clicked} type="checkbox" id="feature3" name='running_slow' />
    <div>
      <span>
        Slow
      </span>
    </div>
  </article>
  <article className="feature2">
    <input onClick={clicked} type="checkbox" id="feature2" name='running_Moderate' />
    <div>
      <span>
        Moderate
      </span>
    </div>
  </article>
  <article className="feature2">
    <input onClick={clicked} type="checkbox" id="feature2" name='running_fast' />
    <div>
      <span>
        Fast
      </span>
    </div>
  </article>
  </div>
</div>
</div>

          </div>
       <div className='second-section'>

        <article className="feature3">
          <input onClick={clicked} type="checkbox" id="feature3" name='bicycling' />
          <div>
            <span>
              bicycling
            </span>
          </div>
        </article>

        <article className="feature4">
          <input onClick={clicked} type="checkbox" id="feature4" name='dogwalking' />
          <div>
            <span>
              Dogwalking
            </span>
          </div>
        </article>
        <article className="feature5">
          <input onClick={clicked} type="checkbox" id="feature5" name='gardening' />
          <div>
            <span>
              Gardening
            </span>
          </div>
        </article>
        <article className="feature6">
          <input onClick={clicked} type="checkbox" id="feature6" name='swimming' />
          <div>
            <span>
              Swimming
            </span>
          </div>
        </article>
       </div>

       <div className='third-section'>

        <article className="feature7">
          <input onClick={clicked} type="checkbox" id="feature7" name='drawing' />
          <div>
            <span>
              Drawing/Painting
            </span>
          </div>
        </article>
        <article className="feature8">
          <input onClick={clicked} type="checkbox" id="feature8" name='cookouts' />
          <div>
            <span>
              Cookouts/BBQ
            </span>
          </div>
        </article>
        <article className="feature9">
          <input onClick={clicked} type="checkbox" id="feature9" name='blockparties' />
          <div>
            <span>
              Block parties
            </span>
          </div>
        </article>
        <article className="feature10">
          <input onClick={clicked} type="checkbox" id="feature10" name='dinnerparties' />
          <div>
            <span>
              Dinner parties
            </span>
          </div>
        </article>
       </div>
       <div className='forth-section'>
        

        <article className="feature11">
          <input onClick={clicked} type="checkbox" id="feature11" name='computergames' />
          <div>
            <span>
              Computer games
            </span>
          </div>
        </article>
        <article className="feature12">
          <input onClick={clicked} type="checkbox" id="feature12" name='readinggroups' />
          <div>
            <span>
              Reading Groups
            </span>
          </div>
        </article>
        <article className="feature13">
          <input onClick={clicked} type="checkbox" id="feature13" name='restaurants' />
          <div>
            <span>
              Restaurants
            </span>
          </div>
        </article>
       </div>
       <div className='fifth-section'>

        {/* <article className="feature14">
          <input onClick={clicked} type="checkbox" id="feature14" name='dogwalking' />
          <div>
            <span>
            movies
            </span>
          </div>
        </article> */}
        <div className='expand-checkbox'>

<i className="fa fa-rocket"></i>
<article className="feature14">
  <input onClick={clicked} type="checkbox" id="feature14" name='movies' />
  <div>
    <span>
      Movies
    </span>
  </div>
</article>
<div className='movies-options'>
  <div className='options-text'>Choose Genres</div>
  <div className='movies-options-inside'>

  <article className="feature14">
    <input onClick={clicked} type="checkbox" id="feature14" name='movies_action' />
    <div>
      <span>
        action
      </span>
    </div>
  </article>
  <article className="feature14" >
    <input onClick={clicked} type="checkbox" id="feature14" name='movies_romance' />
    <div>
      <span>
        romance
      </span>
    </div>
  </article>
  <article className="feature14">
    <input onClick={clicked} type="checkbox" id="feature14" name='movies_comedy' />
    <div>
      <span>
        comedy
      </span>
    </div>
  </article>
  <article className="feature14">
    <input onClick={clicked} type="checkbox" id="feature14" name='movies_sciencefiction' />
    <div>
      <span>
        science-fiction
      </span>
    </div>
  </article>
  <article className="feature14">
    <input onClick={clicked} type="checkbox" id="feature14" name='movies_indie' />
    <div>
      <span>
        indie
      </span>
    </div>
  </article>
  </div>
</div>
</div>









        {/* <article className="feature15">
          <input onClick={clicked} type="checkbox" id="feature15" name='dogwalking' />
          <div>
            <span>
              Shopping
            </span>
          </div>
        </article> */}

<div className='expand-checkbox'>

<i className="fa fa-rocket"></i>
<article className="feature15">
  <input onClick={clicked} type="checkbox" id="feature15" name='shopping' />
  <div>
    <span>
      Shopping
    </span>
  </div>
</article>
<div className='shopping-options'>
  <div className='options-text'>Choose :</div>
  <div className='shopping-options-inside'>

  <article className="feature15">
    <input onClick={clicked} type="checkbox" id="feature15" name='shopping_groceries' />
    <div>
      <span>
      groceries
      </span>
    </div>
  </article>
  <article className="feature15">
    <input onClick={clicked} type="checkbox" id="feature15" name='shopping_clothing' />
    <div>
      <span>
        clothing
      </span>
    </div>
  </article>
  <article className="feature15">
    <input onClick={clicked} type="checkbox" id="feature15" name='shopping_books' />
    <div>
      <span>
        books
      </span>
    </div>
  </article>
  </div>
</div>
</div>

       </div>


      {/* <div className='btn-space'>

<button className='next-page-button'>-Next-</button>
      </div> */}
      </section>
      <section className='app2'>
          {/* <div>{arrmap}</div> */}
        <div className="custom-checkbox-section1">
            <div className="expand-checkbox">

        <h1>Favours I can do:</h1>
        <i className="fa fa-rocket"></i>
          <article className="feature16">
            <input onClick={clicked} type="checkbox" id="feature16" name='Errands' />
            <div>
              <span>
                Errands
              </span>
            </div>
          </article>
          <div className='Errands-options'>
            <div className='options-text'>Choose how freequently you would be able to contribute:</div>
            <div className='Errands-options-inside'>

            <article className="feature16">
              <input onClick={clicked} type="checkbox" id="feature16" name='Errands_emergencies' />
              <div>
                <span>
                  Emergencies
                </span>
              </div>
            </article>
            <article className="feature16">
              <input onClick={clicked} type="checkbox" id="feature16" name='Errands_occasional' />
              <div>
                <span>
                  Occasional
                </span>
              </div>
            </article>
            <article className="feature16">
              <input onClick={clicked} type="checkbox" id="feature16" name='Errands_freequently' />
              <div>
                <span>
                  Frequently
                </span>
              </div>
            </article>
            </div>
          </div>
        
            </div>
        </div>
        <div className="custom-checkbox-section2">
            <div className="expand-checkbox">

        <i className="fa fa-rocket"></i>
          <article className="feature17">
            <input onClick={clicked} type="checkbox" id="feature17" name='Childcare' />
            <div>
              <span>
                Childcare
              </span>
            </div>
          </article>
          <div className='Childcare-options'>
            <div className='options-text'>Choose how freequently you would be able to contribute:</div>
            <div className='Childcare-options-inside'>

            <article className="feature17">
              <input onClick={clicked} type="checkbox" id="feature17" name='Childcare_emergencies' />
              <div>
                <span>
                  Emergencies
                </span>
              </div>
            </article>
            <article className="feature17">
              <input onClick={clicked} type="checkbox" id="feature17" name='Childcare_occasional' />
              <div>
                <span>
                  Occasional
                </span>
              </div>
            </article>
            <article className="feature17">
              <input onClick={clicked} type="checkbox" id="feature17" name='Childcare_freequently' />
              <div>
                <span>
                  Frequently
                </span>
              </div>
            </article>
            </div>
          </div>
        
            </div>
        </div>
        <div className="custom-checkbox-section3">
            <div className="expand-checkbox">

        <i className="fa fa-rocket"></i>
          <article className="feature18">
            <input onClick={clicked} type="checkbox" id="feature18" name='Eldercare' />
            <div>
              <span>
                Eldercare
              </span>
            </div>
          </article>
          <div className='Eldercare-options'>
            <div className='options-text'>Choose how freequently you would be able to contribute:</div>
            <div className='Eldercare-options-inside'>

            <article className="feature18">
              <input onClick={clicked} type="checkbox" id="feature18" name='Eldercare_emergencies' />
              <div>
                <span>
                  Emergencies
                </span>
              </div>
            </article>
            <article className="feature18">
              <input onClick={clicked} type="checkbox" id="feature18" name='Eldercare_occasional' />
              <div>
                <span>
                  Occasional
                </span>
              </div>
            </article>
            <article className="feature18">
              <input onClick={clicked} type="checkbox" id="feature18" name='Eldercare_freequently' />
              <div>
                <span>
                  Frequently
                </span>
              </div>
            </article>
            </div>
          </div>
        
            </div>
        </div>
        <div className="custom-checkbox-section4">
            <div className="expand-checkbox">

        <i className="fa fa-rocket"></i>
          <article className="feature19">
            <input onClick={clicked} type="checkbox" id="feature19" name='Petcare' />
            <div>
              <span>
                Petcare
              </span>
            </div>
          </article>
          <div className='Petcare-options'>
            <div className='options-text'>Choose how freequently you would be able to contribute:</div>
            <div className='Petcare-options-inside'>

            <article className="feature19">
              <input onClick={clicked} type="checkbox" id="feature19" name='Petcare_emergencies' />
              <div>
                <span>
                  Emergencies
                </span>
              </div>
            </article>
            <article className="feature19">
              <input onClick={clicked} type="checkbox" id="feature19" name='Petcare_occasional' />
              <div>
                <span>
                  Occasional
                </span>
              </div>
            </article>
            <article className="feature19">
              <input onClick={clicked} type="checkbox" id="feature19" name='Petcare_freequently' />
              <div>
                <span>
                  Frequently
                </span>
              </div>
            </article>
            </div>
          </div>
        
            </div>
        </div>
        <div className='tutoring-text '>Tutoring( enter subjects if yes )</div>
        <input type='text' id='tutoring' className='typeinput' placeholder='subjects' name='name' onChange={gettypedsubs} required/>

        </section>

        <input id='submit-btn' type='submit'/>
      </form>
    </div>
  )
}
