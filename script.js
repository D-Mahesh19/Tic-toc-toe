let flange=1;

function my_function1()
{let b1=document.getElementById("b1");
    if(flange===1)
        {
           b1.innerText ='X';
            b1.disabled=true;
            flange=0;
           
            
        }
        else{
            b1.innerText= 'O';
            b1.disabled=true;
            flange=1;
        }
        win_check()
}
function my_function2()
{let b2=document.getElementById("b2");
    if(flange===1)
        {
            b2.innerText='X';
            b2.disabled=true;
            flange=0;
            
        }
        else{
            b2.innerText= 'O';
            b2.disabled=true;
           
            flange=1;
        }
        win_check()
}
function my_function3()
{ let b3=document.getElementById("b3");
    if(flange===1)
        {
           b3.innerText='X';
            b3.disabled=true;
            flange=0;
            
        }
        else{
           b3.innerText= 'O';
            b3.disabled=true;
            flange=1;
        }
        win_check()
}
function my_function4()
{let b4=document.getElementById("b4");
    if(flange===1)
        {
            b4.innerText='X';
            b4.disabled=true;
            flange=0;
            
        }
        else{
             b4.innerText='O';
            b4.disabled=true;
            flange=1;
        }
        win_check()
}
function my_function5()
{let b5=document.getElementById("b5");
    if(flange===1)
        {
            b5.innerText='X';
            b5.disabled=true;
            flange=0;
            
        }
        else{
            b5.innerText='O';
            b5.disabled=true;
            flange=1;
        }
        win_check()
}
function my_function6()
{let b6=document.getElementById("b6");
    if(flange===1)
        {
             b6.innerText= 'X';
            b6.disabled=true;
            flange=0;
            
        }
        else{
             b6.innerText= 'O';
            b6.disabled=true;
            flange=1;
        }
        win_check()
}
function my_function7()
{let b7=document.getElementById("b7");
    if(flange===1)
        {
            b7.innerText= 'X';
            b7.disabled=true;
            flange=0;
            
        }
        else{
             b7.innerText= 'O';
            b7.disabled=true;
            flange=1;
        }
        win_check()
}
function my_function8()
{
    let b8=document.getElementById("b8");
    if(flange===1)
        {
            b8.innerText = 'X';
            b8.disabled=true;
            flange=0;
            
        }
        else{
           b8.innerText= 'O';
            b8.disabled=true;
            flange=1;
        }
        win_check()
}
function my_function9()
{
    let b9=document.getElementById("b9");
    if(flange===1)
        {
            b9.innerText= 'X'
            b9.disabled=true;
            flange=0;
            
        }
        else{
           b9.innerText= 'O';
            b9.disabled=true;
            flange=1;
        }
        win_check()
}

function reset()
{
    location.reload();
}

function win_check()
{
    const arr=[];
    for(var i=1;i<=9;i++)
        {
            arr.push(document.getElementById('b'+i).innerHTML);
        }

        let Win_com=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

        for(let win of Win_com )
           { 
            const [a,b,c]=win
            if(arr[a]==arr[b] && arr[b]==arr[c] && arr[a]!='')
                {
                    document.getElementById("msg").innerHTML="Player "+arr[a]+" Wins!.."
                    disablebtn();
                }

        }
        if (!arr.includes('')) {
            document.getElementById("msg").innerHTML = "It's a draw!";
        }
}

function disablebtn()
{
    for(var i=1;i<=9;i++)
        {
            document.getElementById('b' + i).disabled = true;
        }
}

