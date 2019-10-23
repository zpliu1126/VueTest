<template>
  <div id="loginContainer">
    <div class="card">
    <div class="card-header">
        Weclome To Github
    </div>
        <div class="card-body">
          <form action="http://www.zpliublog.club:8080/API/" method="post">
              <div class="form-group">
                  <label for="">
                   Account
                  </label>
                    <input type="text" class="form-control" required placeholder="Tel phone number or email">
                </div>
                <div class="form-group">
                  <label for="">
                    password
                  </label>
                    <input type="password" class="form-control" required placeholder="At least five character">
                </div>
                <button  class="form-control btn" type="submit" style="">login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>



</script>
<style scoped>
  #loginContainer {
    color: white;
    height: 100vh;
    border-top: solid 2px darkred;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items:center;
    background: rgb(41, 45, 62) url(https://43423.oss-cn-beijing.aliyuncs.com/img/20190921231830.svg);
    background-repeat: repeat-y;
    background-size:cover;

  }
  .form-group{
    min-height: 100px;
  }
  form input[type="text"], input[type="password"]{
    border:none;
    border-bottom: solid 2px red;
    width: 100%;
    height: 40px;
    padding:10px;
    transform: border-bottom 0.5s;
    color: grey;
  }
  form input[type="text"]:focus, input[type="password"]:focus{
    border-bottom:solid 2px blue;
  }
  form input[type="text"]:hover, input[type="password"]:hover{
    border-bottom:solid 2px blue;
  }
  .form-group label{
    font-size: 20px;
  }
  button.form-control{
    background: #fafafa;
    border: none;
    border-radius: 0.6;
  }   
  .card-header{
    text-align: start;
    font-size: 20px;
    margin: 20px 0;
  }
form button[type="submit"]{
    height: 40px;
    width: 60px;
    background-color:#67cd0a;
    color: #fafafa;
  }
form button[type="submit"]:hover{
    height: 40px;
    width: 60px;
    background-color:#cd170a;
    color: #fafafa;
  }
</style>