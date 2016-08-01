$(document).ready(function() {
    $('map').imageMapResize();
    $('#euro_zone').on('click',function(){
      $('#header').text("European Town Center");
      
    });

    $('.zone').on('click',function(){
      $('#concept_card').show();
    });

    $('#med_zone').on('click',function(){
      $('#header').text("Medical Tourism");
      $('#caption').text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
      $('#photo-container').css('display','none');
      $('#photo-container').css('display','block');
      $('#med-photos').siblings().hide();
      $('#med-photos').css('display','block');
      
    });
    $('#mang_zone').on('click',function(){
      $('#header').text("Mangroves Reserve");
      $('#caption').text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
      $('#photo-container').css('display','none');
      $('#photo-container').css('display','block');
      $('#mangrove-photos').siblings().hide();
      $('#mangrove-photos').css('display','block');
      return false;
    });
    $('#bus_park').on('click',function(){
      $('#header').text("Business Park");
      $('#caption').text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
      $('#photo-container').css('display','none');
      $('#photo-container').css('display','block');
      $('#business-photos').siblings().hide();
      $('#business-photos').css('display','block');
      return false;
    });
    $('#inter_zone').on('click',function(){
      $('#header').text("Internationl Town Center");
      $('#caption').text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
      $('#photo-container').css('display','none');
      $('#photo-container').css('display','block');
      $('#itc-photos').siblings().hide();
      $('#itc-photos').css('display','block');
      return false;
    });
    $('#inter_zone2').on('click',function(){
      $('#header').text("Internationl Town Center");
      $('#caption').text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
      $('#photo-container').css('display','none');
      $('#photo-container').css('display','block');
      $('#itc-photos').siblings().hide();
      $('#itc-photos').css('display','block');
      return false;
    });
    $('#ceo_village').on('click',function(){
      $('#header').text("CEO Village");
      $('#caption').text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
      $('#photo-container').css('display','none');
      $('#photo-container').css('display','block');
      $('#ceo-vill-photos').siblings().hide();
      $('#ceo-vill-photos').css('display','block');
      return false;
    });
    $('#theme_park').on('click',function(){
      $('#header').text("Theme Park");
      $('#caption').text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
      $('#photo-container').css('display','none');
      $('#photo-container').css('display','block');
      $('#theme-park-photos').siblings().hide();
      $('#theme-park-photos').css('display','block');
      return false;
    });
    $('#corp_village').on('click',function(){
      $('#header').text("Corporate Village");
      $('#caption').text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
      $('#photo-container').css('display','none');
      $('#photo-container').css('display','block');
      $('#corp-vill-photos').siblings().hide();
      $('#corp-vill-photos').css('display','block');
      return false;
    });
    $('#golf_course').on('click',function(){
      $('#header').text("Golf Course");
      $('#caption').text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
      $('#photo-container').css('display','none');
      $('#photo-container').css('display','block');
      $('#golf-photos').siblings().hide();
      $('#golf-photos').css('display','block');
      return false;
    });
    $('#golf_course2').on('click',function(){
      $('#header').text("Golf Course");
      $('#caption').text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
      $('#photo-container').css('display','none');
      $('#photo-container').css('display','block');
      $('#golf-photos').siblings().hide();
      $('#golf-photos').css('display','block');
      return false;
    });
    $('#central_park').on('click',function(){
      $('#header').text("Central Park");
      $('#caption').text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
      $('#photo-container').css('display','none');
      $('#photo-container').css('display','block');
      $('#central-photos').siblings().hide();
      $('#central-photos').css('display','block');
      return false;
    });
    $('#uni_belt').on('click',function(){
      $('#header').text("University Belt");
      $('#caption').text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
      $('#photo-container').css('display','none');
      $('#photo-container').css('display','block');
      $('#univ-belt-photos').siblings().hide();
      $('#univ-belt-photos').css('display','block');
      return false;
    });
    $('#enviro_center').on('click',function(){
      $('#header').text("Environmental Center");
      $('#caption').text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
      $('#photo-container').css('display','none');
      $('#photo-container').css('display','block');
      $('#enviro-photos').siblings().hide();
      $('#enviro-photos').css('display','block');
      return false;
    });
    $('#asean_zone').on('click',function(){
      $('#header').text("Asian Town Center");
      $('#caption').text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
      $('#photo-container').css('display','none');
      $('#photo-container').css('display','block');
      $('#atc-photos').siblings().hide();
      $('#atc-photos').css('display','block');
      return false;
    });
    $('#celeb_village').on('click',function(){
      $('#header').text("Celebrity Village");
      $('#caption').text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.");
      $('#photo-container').css('display','none');
      $('#photo-container').css('display','block');
      $('#celeb-photos').siblings().hide();
      $('#celeb-photos').css('display','block');
      return false;
    });
    
    $('.parallax').parallax();
    
    $('#photo-container').magnificPopup({
      delegate: 'a',
      type: 'image',
      mainClass: 'mfp-fade'
    });
 
});