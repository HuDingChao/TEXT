$(function(){
  var n=0
  var id1,id2;
  var idSrc1,idSrc2;
  var flag=true;
  
  var htm = '';
  var imgArr =[
      'images/1.png',
      'images/2.png',
      'images/3.png',
      'images/4.png'
  ];
  imgArr =imgArr.concat(imgArr);
  imgArr =imgArr.concat(imgArr);
  imgArr.sort(function(){
      return Math.random() - 0.5;
  });
  for(var i=0; i<imgArr.length;i++){
      htm+='<div class="item" data-id="'+(i+1)+'">';
      htm+='<p style="background: url('+imgArr[i]+') no-repeat center;"></p>'
      htm+='</div>'
  }
  $('.box').html(htm);
  $('.item').on('click',function(){
      if(flag){
        if($(this).find('p').hasClass('on')){
            return;
        }
        n++;
        $(this).find('p').css({'opacity':1,'transform':'scale(1,1)'}).addClass('on');
        
        if(n%2 == 0){
            id2 = $(this).attr('data-id');
            idSrc2 = $(this).find('p').css('background');
            flag=false;
            if(idSrc1 == idSrc2){
                console.log('相等')
                flag=true;
            }else{
                console.log('不相等')
                setTimeout(function(){
                    $('[data-id='+id1+']').find('p').css({'opacity':0,'transform':'scale(0,1)'}).removeClass('on');
                    $('[data-id='+id2+']').find('p').css({'opacity':0,'transform':'scale(0,1)'}).removeClass('on');
                    flag=true;
                },600)
            }
        }else{
           id1 = $(this).attr('data-id');
           idSrc1 = $(this).find('p').css('background');
        }
      }
  })






})