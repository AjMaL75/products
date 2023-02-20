function login()
{
    if(log.value in localStorage)
    {
        data=JSON.parse(localStorage.getItem(log.value))
        if(pas.value==data.password)
        {
        window.location="adddetails.html"
        }
        else{
            alert('incorrect password')
        }
    }
    else{
        alert('incorrect details')
    }
   
   
}
function addProductData()
{
    products={pname1:pname.value,pid1:pid.value,pprice1:pprice.value,pbrand1:pbrand.value,pquantity1:pquantity.value}
    console.log(products);
    localStorage.setItem(products.pid1,JSON.stringify(products))
}
function toSearch()
{
    window.location="search.html"
}
function search()
{
    getval=sear.value
    if(getval in localStorage)
    {
        prod=JSON.parse(localStorage.getItem(getval))
        disp.innerHTML=`<p>product name is =${prod.pname1}</p>
                         <p>product id is =${prod.pid1}</p>
                         <p>product price is =${prod.pprice1}</p>
                         <p>product brand is =${prod.pbrand1}</p>
                         <p>product quantity is =${prod.pquantity1}</p>`                                  

    }
    else{
        alert("id has not exist")
    }
}
function out()
{
    window.location="index.html"
}
function register()
{
    uname1=uname.value
    password=pass.value
    mob=mobile.value

    userdetails={username:uname1,password,mobile:mob}
    if(mob in localStorage)
    {
        alert('You already signed in')
    }
    else{

    localStorage.setItem(mob,JSON.stringify(userdetails))
    window.location="index.html"
    }
}