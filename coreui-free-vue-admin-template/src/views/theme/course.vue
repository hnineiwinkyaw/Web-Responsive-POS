<template>
  <div >
    <h1 id="head">Create Course</h1>
    
    <span class="tab">
  <button class="tablinks" v-on:click="openCity('Development')">Choose Course</button>
  
</span><br>
<br><br>
<!-- Tab content -->

    


      <li id="development" class="tabcontent" v-show="dev" v-for="i in data"> 
        <input type="radio"  :value="i.Course" v-model="form.course" >{{i.Course}}<br>{{i.Duration}}
    </li>

      <!--<fieldset id="group1" v-model="form.course">
   	<template id="development" class="tabcontent" v-show="dev" v-for="i in data">
 <button class="contain" value=""><input type="radio" name="i.Course" value="i.Course" >{{i.Course}}<br>{{i.Duration}}</button>
</template></fieldset> </form>-->

<span id="design" class="tabcontent" v-show="design">
  <h3>Paris</h3>
  <p>Paris is the capital of France.</p> 
</span>

<span id="it" class="tabcontent" v-show="it">
  <h3>Tokyo</h3>
  <p>Tokyo is the capital of Japan.</p>
</span>
    	<table align="center">
			
			<br>
			<tr>
			<td>Name*</td><td><input type="text" class="box" required="required" v-model="form.name" placeholder="Mg Mg"></td>
			</tr>
      <tr>
      <td>Start Date*</td><td><input type="date" class="box" v-model="form.sDate" ></td>
      </tr>
			<tr>
			<td>NRC*</td><td><input type="text" class="box" required="required" v-model="form.nrc"></td>
			</tr>
			<tr>
			<td>Birthday</td><td><input type="date" class="box" v-model="form.birthday"></td>
			</tr>
			<tr><td>Gender</td><td>
        <fieldset >
          <input type="radio" name="gender" v-bind:value="2" v-model="gender">Female &nbsp;&nbsp;
  				<input type="radio" name="gender" v-bind:value="1" v-model="gender">Male
        </fieldset>
			</td></tr>
				<!--<tr v-for="i in data">

					<th>{{i.name}}</th><th>{{i.roll}}</th>

				</tr>-->
       <tr ><td colspan="1"><input type="submit"align="center" v-on:click="addInfo" value="SEND"></td></tr>
		</table>
		
   
   </div>
</template>

<script>
export default {
  name: 'course',
  data:function(){
  	return{
  		
  		data:[
  		
  		
  		],
      
  		dev:false,
  		design:false,
  		it:false,
  		form:{
  			name:'',
  			nrc:'',
  			birthday:'',
  			gender:'',
  			course:'',
  			sDate:'',
  		},
      gender:''
  	}
  },
  beforeCreate:function(){
  	this.$http.get("class").then(
  			response=>{
  				if(response){
            this.data=response.body;
            
  					
          }
  				else
  					alert("no response");
  			},
  			response=>{
  				alert("err");
  			}
  		)
  },
 methods: {
    submitFunc () {
    alert("name:");
  
    },
    flag (value) {
      
    },


  addInfo(){
    if(this.gender == '1'){
      this.form.gender = "male";
    }
    else
      this.form.gender='female';


    alert(JSON.stringify(this.form));

    this.$http.post("class",this.form, {
    headers : {
        'Content-Type' : 'application/json; charset=UTF-8'
    }
  }).then(response=>{
      alert("ok");
    },response=>{
      alert("error");
    })
  },
 openCity(courseName) {
 	if(courseName == 'Development'){
 		this.dev = !this.dev;
 	}
 	if(courseName == 'Design'){
 		this.design = !this.design;
 	}
 	if(courseName == 'it'){
 		this.it = !this.it;
 	}
    // Declare all variables
    /*var i, tabcontent, tablinks;
    //alert(cityName);
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "block";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "none";
    evt.currentTarget.className += " active";*/
}

}
}
</script>
<style>
#head{text-align:center;color:blue;background-color:"this.";}
.box{width:250px;}
table tr{paddig-top:50px;}
#field{border:1px solid rgba(0,0,0,0.5);
width:300px;
	font-size:15px;
}
	.contain{background-image:url(adminbg.jpg);
		width:100px;height:100px;border:1px solid rgba(0,0,0,0.5);box-shadow:2px 2px 1px rgba(0,0,0,0.5);margin:5px;
	}
	.tab {
    overflow: hidden;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
}

/* Style the buttons that are used to open the tab content */
.tab button {
    background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
}

/* Change background color of buttons on hover */
.tab button:hover {
    background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
    background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
    
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
}

</style>