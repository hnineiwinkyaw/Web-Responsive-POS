<template>
  <div>
  	<h2 align="center">Students Informatino</h2>
    <table align="center">
    	<tr>
    		<th widt="10px">No.</th>
    		<th>Name</th>
    		<th>NRC</th>
    		<th>Course</th>
    	</tr>
    	<tr v-for="i in data">
    		<td>1</td>
    		<td>{{i.Name}}</td>
    		<td>{{i.NRC}}</td>
    		<td>{{i.Course}}</td>
    		
    	</tr>
    </table>
  </div>
</template>

<script>


export default {
  name: 'colors',
  data:function(){
  	return{
  		data:[],
  		msg:"hello"
  	}
  },
  beforeCreate:function(){
  	//alert('ji');
  	this.$http.get("students").then(
  		response=>{
  			if(response){
  			//alert(JSON.stringify(response));
  			console.log(response.body);
  			this.data = response.body;
  		}
  			else
  				alert("no res");

  		},
  		response=>{
  			alert('err');
  		}
  		)
  },
  methods:{
  		methodName(){

  		}

  }
}
</script>
<style>
tr:nth-child(odd){background-color: #f2f2f2;}
table,tr{border-bottom:1px solid rgba(0,0,0,0.6);}
th{background-color:#20a8d8;}
td,th{padding-top:10px;padding-bottom:10px;width:100px;
		padding-left:20px;padding-right:20px;}
</style>