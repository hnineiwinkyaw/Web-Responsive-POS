<template>
  
    <div ><form class ="adForm">
		<img class="headImg" width="128px" height="128px" ><br><br>
		
			<input class="inpu" type="email" placeholder="User Name" required="required"><br><br>
			<input class="inpp" type="password" placeholder="Password" required="required"><br><br>
			<input class="inpc" type="checkbox">Remember Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" style="text-decoration:none; color:black;">Forgot Password?</a><br>
			<br>
			<input type="submit" style="width:30%;height:7%;margin-left:32%;background-color:rgba(0,0,0,0.5);
font-size:0.9em; color:white;" value="LOGIN">
		</form>

	</div>
   
</template>

<script>
export default {
  name: 'typography'
}
</script>
<style>
.headImg{background:url(userIcon.png);
	margin-top:55px;margin-left:35%;
}
.inpu{width:55%;height:7%;margin-left:22%;background:url(user.jpg);background-repeat:no-repeat;
padding-left:40px;font-size:0.9em;}
.inpp{width:55%;height:7%;margin-left:22%;background:url(pass.png);background-repeat:no-repeat;
padding-left:40px;font-size:0.9em;}
.inpc{width:2.5%;height:2.5%;margin-left:22%;font-size:0.9em;}
	.adForm{
		width:40%;margin:auto;height:480px;
	background-image:url("adminbg.jpg");
	}

</style>