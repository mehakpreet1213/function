function isTouching(sub1,sub2)
{
  if (sub1.x - sub2.x < sub2.width/2 + sub1.width/2
    && sub2.x - sub1.x < sub2.width/2 + sub1.width/2
    && sub1.y - sub2.y < sub2.height/2 + sub1.height/2
    && sub2.y - sub1.y < sub2.height/2 + sub1.height/2) {
 return true;
}
else {
  return false;
}

}

function bounceoff (sub4,sub5)
{
  if (sub4.x - sub5.x < sub5.width/2 + sub4.width/2
    && sub5.x - sub4.x < sub5.width/2 + sub4.width/2) {
  sub4.velocityX = sub4.velocityX * (-1);
  sub5.velocityX = sub5.velocityX * (-1);
}
if (sub4.y - sub5.y < sub5.height/2 + sub4.height/2
  && sub5.y - sub4.y < sub5.height/2 + sub4.height/2){
  sub4.velocityY = sub4.velocityY * (-3);
  sub5.velocityY = sub5.velocityY * (-3);
}


}
