onload=function(){var c=0,e=document.getElementsByTagName("html")[0],i=document.getElementsByTagName("body")[0];e.onclick=function(e){var n=document.createElement("b");n.style.color="#E94F06",n.style.zIndex=9999,n.style.position="absolute",n.style.select="none";var a=e.pageX,r=e.pageY;switch(n.style.left=a-10+"px",n.style.top=r-20+"px",clearInterval(t),++c){case 2:n.innerText="😀";break;case 3:n.innerText="😃";break;case 4:n.innerText="❤";break;case 5:n.innerText="😁";break;case 6:n.innerText="😆";break;case 7:n.innerText="😅";break;case 8:n.innerText="😂";break;case 9:n.innerText="🤣";break;case 10:n.innerText="😊";break;case 11:n.innerText="😚";break;case 12:n.innerText="😙";break;case 13:n.innerText="😗";break;case 14:n.innerText="😘";break;case 15:n.innerText="😍";break;case 16:n.innerText="😌";break;case 17:n.innerText="😉";break;case 18:n.innerText="🙃";break;case 19:n.innerText="🙂";break;case 20:n.innerText="😥";break;case 21:n.innerText="😋";break;case 22:n.innerText="😜";break;case 23:n.innerText="😝";break;case 24:n.innerText="😛";break;case 25:n.innerText="😨";break;case 26:n.innerText="😒";break;case 27:n.innerText="😎";break;case 28:n.innerText="🙄";break;case 29:n.innerText="😭";break;case 30:n.innerText="😖";break;case 31:n.innerText="(๑•́ ∀ •̀๑)";break;case 32:n.innerText="(๑•́ ₃ •̀๑)";break;case 40:n.innerText="(๑•̀_•́๑)";break;case 50:n.innerText="（￣へ￣）";break;case 60:n.innerText="(╯°口°)╯(┴—┴";break;case 70:n.innerText="૮( ᵒ̌皿ᵒ̌ )ა";break;case 80:n.innerText="╮(｡>口<｡)╭";break;case 90:n.innerText="( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";break;case 100:case 101:case 102:case 103:case 104:n.innerText="😏";break;case 105:n.innerText="(ꐦ°᷄д°᷅)";break;default:n.innerText="😂"}n.style.fontSize=10*Math.random()+8+"px";var t,s=0;setTimeout(function(){t=setInterval(function(){150==++s&&(clearInterval(t),i.removeChild(n)),n.style.top=r-20-s+"px",n.style.opacity=(150-s)/120},8)},70),i.appendChild(n)}};