<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
            <div class="col-md-3">
              <Sliderbar></Sliderbar>
            </div>
            <div class="col-md-9">
              <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
                <router-view class="position"></router-view>
              </transition>
            </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Navbar from '@/components/Navbar'
import Sliderbar from '@/components/Sliderbar'
export default {
  name: 'app',
  components:{
      Navbar,
      Sliderbar
  },
}
</script>

<style>
  .position{
    position: absolute;
  }
</style>
