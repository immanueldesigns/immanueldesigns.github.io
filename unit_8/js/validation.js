function validation()
 {
    
	var contactname=document.enq.name.value;
	var name_exp=/^[A-Za-z\s]+$/;
	if(contactname=='')
	{
		alert("Please enter your name");
		document.enq.name.focus();
		return false;
	}
	else if(!contactname.match(name_exp))
	{
		alert("Invalid name entry. Please try again.");
		document.enq.name.focus();
		return false;
	}
	
	var email=document.enq.email.value;
	//var email_exp=/^[A-Za-z0-9\.-_\$]+@[A-Za-z]+\.[a-z]{2,4}$/;
	var email_exp=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if(email=='')
	{
		alert("Please enter a valid e-mail address.");
		document.enq.email.focus();
		return false;
	}
	else if(!email.match(email_exp))
	{
		alert("Invalid e-mail entry. Please try again.");
		document.enq.email.focus();
		return false;
	}
	
	
	var message=document.enq.message.value;
	if(message=='')
	{
		alert("Please enter your message.");
		document.enq.message.focus();
		return false;
	}
    return true;
 }