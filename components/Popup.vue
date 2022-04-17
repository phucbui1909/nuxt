<template>
	<div :id="id">
    <div class="modal-content max650">    
      <div class="modal-content-box">
        <div class="titpage text_center">
          <h2>Modal</h2>
        </div>
        <div class="popcontent">
          <slot name="popcontent"></slot>
        </div>
        <div class="popfooter">
          <slot name="popfooter"></slot>
        </div>
      </div>
    </div>
  </div>      
</template>

<script type="text/javascript">
  export default {
    props: {
      id: {
        type: String,			
      },
    },  
   
  }
</script>