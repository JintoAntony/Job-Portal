<?php

session_start();

$mail=$_SESSION['email'];

?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html class="no-js pattern_1">
<head>
<title>Jobs</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Lato:300,400,700&amp;subset=latin,latin-ext"/>
<link href='http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700' rel='stylesheet' type='text/css'>
<link href="css/font-awesome.css" rel="stylesheet" type="text/css" />
<link href="css/font-awesome-ie7.css" rel="stylesheet" type="text/css" />
<link href="css/bootstrap.css" rel="stylesheet">
<link href="css/bootstrap-responsive.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="css/reset.css"/>
<link id="color_css" rel="stylesheet" type="text/css" href="css/color_scheme_1.css"/>
<link rel="stylesheet" type="text/css" href="css/jquery.combosex.css"/>
<link rel="stylesheet" type="text/css" href="css/jquery.flexslider.css"/>
<link rel="stylesheet" type="text/css" href="css/jquery.scrollbar.css"/>

 <link rel="stylesheet" href="css/style.css">

<!--[if (lte IE 9)]>
    <link rel="stylesheet" type="text/css" href="css/iefix.css"/>
    <![endif]-->
<script type="text/javascript" src="js/jquery.1.7.2.min.js"></script>
<script type="text/javascript" src="js/jquery-ui.1.7.2.min.js"></script>
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
<script type="text/javascript" src="js/jquery.combosex.min.js"></script>
<script type="text/javascript" src="js/jquery.flexslider-min.js"></script>
<script type="text/javascript" src="js/jquery.mousewheel.js"></script>
<script type="text/javascript" src="js/jquery.easytabs.min.js"></script>
<script type="text/javascript" src="js/jquery.gmap.min.js"></script>
<script type="text/javascript" src="js/jquery.scrollbar.min.js"></script>
<script type="text/javascript" src="js/custom.js"></script>
<script type="text/javascript" src="js/jquery.isotope.min.js"></script>
  
  
<!---------------- Date Picker Files ------------>
<link rel="stylesheet" type="text/css" media="all" href="css/jsDatePick_ltr.min.css" />
<script type="text/javascript" src="js/jsDatePick.min.1.3.js"></script>
<script type="text/javascript">
	window.onload = function(){
		new JsDatePick({
			useMode:2,
			target:"date",
			dateFormat:"%y-%m-%d"
			/*selectedDate:{				This is an example of what the full configuration offers.
				day:5,						For full documentation about these settings please see the full version of the code.
				month:9,
				year:2006
			},
			yearsRange:[2010,2040],
			limitToToday:false,
			cellColorScheme:"beige",
			dateFormat:"%m-%d-%Y",
			imgPath:"img/",
			weekStartDay:1*/
		});
	};
</script>
<!----------------------------------------------------->
</head>

<body>

<div id="bar">
  <div class="inner"> 
    
    <!-- Language Menu 
    <ul id="lang-menu">
      <li id="en" class="current">En</li>
      <li id="fr"><a href="#">Fr</a></li>
      <li id="de"><a href="#">De</a></li>
      <li id="it"><a href="#">It</a></li>
    </ul>
    <!-- /Language Menu --> 
    
    <!-- User Menu -->
    <ul id="user-menu">
      
	</ul>
    <!-- /User Menu --> 
    
  </div>
</div>
<!-- /Bar --> 

<!-- Header -->
<div id="header">
  <div class="inner"> 
    
    <!-- Logo -->
    <div id="logo"> <a href="index.html"><img src="images/Logo.png" width="205" height="50"  alt="logo"/></a><a class="menu-hider"></a></div>
    <!-- /Logo -->
    
   <?php
	include ('includes/menu.inc.php');
	?>
   
   
    </div>
  </div>
  </div>

<!-- /Header --> 

<!-- Content -->
<div id="content">

  <div class="home">
    
     <section class="sidebar">
	 
	 <h1> Edit Profile </h1>
	 
	  <div class="reg_section personal_info" align="left" style="margin-left:40px;">
	 
	<?php
	include ('includes/menu.php');
	?>
	 
	 </div>
	 
	 </section>	  
  
     <section class="home_content">
	 
	   
     	
<form method="post" action="process_personal.php" name="personal" enctype="multipart/form-data">
<div class="reg_section personal_info">
	  
		  
      <h3>Job Type</h3>
      <input type="text" name="user_job_type"  id="user_job_type"  placeholder="Job type">
      
	  <h3>Location</h3>
      <input type="text" name="user_location"  id="user_location"  placeholder="Location">
      
	  <h3>Industry</h3>
      <input type="text" name="user_industry"  id="user_industry"  placeholder="Thrid Choice">
	  
	  
	  <h3>Category</h3>
<select id="user_category"  name="user_category" >
<option value="" selected="selected">- Select -</option>
<option value="Production / Maintenance / Quality">Production / Maintenance / Quality</option>
<option value="IT Software - Application Programming / Maintenance">IT Software - Application Programming / Maintenance</option>
<option value="ITES / BPO / KPO / Customer Service / Operations">ITES / BPO / KPO / Customer Service / Operations</option>
<option value="Banking / Insurance">Banking / Insurance</option>
<option value="Agent">Agent</option>
<option value="Accounts / Finance / Tax / CS / Audit">Accounts / Finance / Tax / CS / Audit</option>
<option value="Analytics & Business Intelligence">Analytics & Business Intelligence</option>
<option value="Architecture / Interior Design">Architecture / Interior Design</option>
<option value="Content / Journalism">Content / Journalism</option>
<option value="Corporate Planning / Consulting">Corporate Planning / Consulting</option>
<option value="Engineering Design / R&D">Engineering Design / R&D </option>
<option value="Export / Import / Merchandising">Export / Import / Merchandising</option>
<option value="Fashion / Garments / Merchandising">Fashion / Garments / Merchandising</option>
<option value="Guards / Security Services">Guards / Security Services</option>
<option value="Hotels / Restaurants">Hotels / Restaurants</option>
<option value="">HR / Administration / IR</option>
<option value="IT Software - Mobile">IT Software - Mobile</option>
<option value="IT Software - Telecom Software">IT Software - Telecom Software</option>
<option value="IT Software - DBA / Datawarehousing">IT Software - DBA / Datawarehousing</option>
<option value="IT Software - E-Commerce / Internet Technologies">IT Software - E-Commerce / Internet Technologies</option>
<option value="IT Software - Embedded /EDA /VLSI /ASIC /Chip Des.">IT Software - Embedded /EDA /VLSI /ASIC /Chip Des.</option>
<option value="IT Software - ERP / CRM">IT Software - ERP / CRM</option>
<option value="IT Software - Network Administration / Security">IT Software - Network Administration / Security</option>
<option value="IT Software - QA & Testing">IT Software - QA & Testing</option>
<option value="Marketing / Advertising / MR / PR">Marketing / Advertising / MR / PR</option>
<option value="Shipping">Shipping</option>
<option value="Other">Other</option>
</select>

					<h3>Sector</h3>
                    <select id="user_sector"  name="user_sector">
                    <option selected="" value="">- Select an Industry -</option>
                    <option value="Accessories/Apparel/Fashion Design">Accessories/Apparel/Fashion Design</option>
                    <option value="Accounting/Consulting/Taxation">Accounting/Consulting/Taxation</option>
                    <option value="Advertising/Event Management/PR">Advertising/Event Management/PR</option>
                    <option value="Agriculture/Dairy Technology">Agriculture/Dairy Technology</option>
                    <option value="Airlines/Hotel/Hospitality/Travel/Tourism/Restaurants">Airlines/Hotel/Hospitality/Travel/Tourism/Restaurants</option>
                    <option value="Animation / Gaming">Animation / Gaming</option>
                    <option value="Architectural Services/ Interior Designing">Architectural Services/ Interior Designing</option>
                    <option value="Auto Ancillary/Automobiles/Components">Auto Ancillary/Automobiles/Components</option>
                    <option value="Banking/Financial Services/Stockbroking/Securities">Banking/Financial Services/Stockbroking/Securities</option>
                    <option value="Banking/FinancialServices/Broking">Banking/FinancialServices/Broking</option>
                    <option value="Biotechnology/Pharmaceutical/Clinical Research">Biotechnology/Pharmaceutical/Clinical Research</option>
                    <option value="Cement/Construction/Engineering/Metals/Steel/Iron">Cement/Construction/Engineering/Metals/Steel/Iron</option>
                    <option value="Ceramics/Sanitaryware">Ceramics/Sanitaryware</option>
                    <option value="Chemicals/Petro Chemicals/Plastics">Chemicals/Petro Chemicals/Plastics</option>
                    <option value="Computer Hardware/Networking">Computer Hardware/Networking</option>
                    <option value="Consumer FMCG/Foods/Beverages">Consumer FMCG/Foods/Beverages</option>
                    <option value="Consumer FMCG/Foods/Beverages">Consumer Goods - Durables</option>
                    <option value="Courier/Freight/Transportation/Warehousing">Courier/Freight/Transportation/Warehousing</option>
                    <option value="CRM/ IT Enabled Services/BPO">CRM/ IT Enabled Services/BPO</option>
                    <option value="Education/Training/Teaching">Education/Training/Teaching</option>
                    <option value="Electricals/Switchgears">Electricals/Switchgears</option>
                    <option value="Employment Firms/Recruitment Services Firms">Employment Firms/Recruitment Services Firms</option>
                    <option value="Entertainment/Media/Publishing/Dotcom">Entertainment/Media/Publishing/Dotcom</option>
                    <option value="Fertilizers/Pesticides">Fertilizers/Pesticides</option>
                    <option value="Gems and Jewellery">Gems and Jewellery</option>
                    <option value="Government/Defence">Government/Defence</option>
                    <option value="Healthcare/Medicine">Healthcare/Medicine</option>
                    <option value="Insurance">Insurance</option>
                    <option value="KPO/Research/Analytics">KPO/Research/Analytics</option>
                    <option value="Law/Legal Firms">Law/Legal Firms</option>
                    <option value="Machinery/Equipment Manufacturing/Industrial Products">Machinery/Equipment Manufacturing/Industrial Products</option>
                    <option value="Mining">Mining</option>
                    <option value="NGO/Social Services">NGO/Social Services</option>
                    <option value="Office Automation">Office Automation</option>
                    <option value="Others/Engg. Services/Service Providers">Others/Engg. Services/Service Providers</option>
                    <option value="Petroleum/Oil and Gas/Projects/Infrastructure/Power/Non-conventional Energy">Petroleum/Oil and Gas/Projects/Infrastructure/Power/Non-conventional Energy</option>
                    <option value="Printing/Packagin">Printing/Packaging</option>
                    <option value="Publishing">Publishing</option>
                    <option value="Security/Law Enforcement">Security/Law Enforcement</option>
                    <option value="Shipping/Marine">Shipping/Marine</option>
                    <option value="Software Services">Software Services</option>
                    <option value="Telecom Equipment/Electronics/Electronic Devices/RF/Mobile Network/Semi-conductor">Telecom Equipment/Electronics/Electronic Devices/RF/Mobile Network/Semi-conductor</option>
                    <option value="Telecom/ISP">Telecom/ISP</option>
                    <option value="Tyres">Tyres</option>
                    <option value="WaterTreatment/WasteManagement">WaterTreatment/WasteManagement</option>
                    <option value="Wellness/Fitness/Sports">Wellness/Fitness/Sports</option>
                    </select>
	  
   
</br>   
<p class="submit" style="float:left;"><input type="submit" name="register" value="Update"></p>	

</div>
</form>	  
		 
		 <br/>
		 <br/>	
  </section>	   
  </div>
  
  
  <div id="footer">
  <section class="footer-wrapper">
    <section class="row-fluid">
      <section class="inner">
        <div id="site-description">
          <h3><img src="images/Logo.png" width="205" height="50"  alt=""/></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Praesent sodales velit quis augue. Cras suscipit.</p>
        </div>
        <div id="footer-menu">
          
          <div id="fol-menu" class="footer-menu span3">
            <h2>Follow Us</h2>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Youtube</a></li>
            </ul>
          </div>
          <div id="job-menu" class="footer-menu span3">
            <h2>Popular Jobs</h2>
            <ul>
              <li><a href="#">Web Developer</a></li>
              <li><a href="#">Web Designer</a></li>
              <li><a href="#">UX Engineer</a></li>
              <li><a href="#">Account Manager</a></li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  </section>
</div>
<!-- /Footer -->
<div class="clearfix"></div>
<!-- Copyright -->
<div id="copyright">
  <div class="inner">
    <div class="row-fluid"> 
    <!-- Copyright Text -->
      <div id="copyright-text">Copyright 2013 <a href="www.spiderguts.com">Spiderguts</a> | All Rights Reserved | Powered by <a href="www.spiderguts.com">Spiderguts</a></div>
      <!-- /Copyright Text --> 
      <!-- Copyright Social Link -->
      <div id="copyright-link">
        <div class="buttons">
          <ul class="top_soical_icons pull-right	">
            <li> <a href="#"> <i class="fa fa-facebook"></i> </a> </li>
            <li> <a href="#"> <i class="fa fa-google-plus"></i> </a> </li>
            <li> <a href="#"> <i class="fa fa-twitter"></i> </a> </li>
            <li> <a href="#"> <i class="fa fa-linkedin-square"></i> </a> </li>
            <li> <a href="#"> <i class="fa fa-pinterest"></i> </a> </li>
            <li> <a href="#"> <i class="fa fa-dribbble"></i> </a> </li>
          </ul>
        </div>
      </div>
      <!-- /Copyright Social Link --> 
      
      <a class="scrollTop" href="#header" style="display: none;">
      <div id = "up_container"> <span></span> </div>
      </a> </div>
  </div>
</div>
<!-- /Copyright -->

<!-- /Copyright -->


</body>
</html>