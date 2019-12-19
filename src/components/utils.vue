<template>
  <div class="media mg-4">

  <h2 class="mg-2 pd-4 bc-navy tc-white centered">Utils</h2>

  <div class="bg-gray t-c-w-a">

    <div class="bg-blue">
      <h1 class="bg-red mg-2 pd-1 lefted">lefted</h1>
      <h1 class="bg-red mg-2 pd-1 righted">righted</h1>
      <h1 class="bg-red mg-2 pd-1 centered">centered</h1>
    </div>

    <div class="bg-blue">
      <h1 class="bg-red mg-2 pd-1 flex">flex</h1>
      <div class="bg-red justified" style="width: 100%;">
        <h1 class="bg-green">justified</h1>
        <h1 class="bg-green">justified</h1>
      </div>
      <div class="bg-red mg-2 pd-1 small">small</div>
    </div>

    <div class="bg-blue loading">
      <div class="bg-red mg-2 pd-1 loading">loading</div>
    </div>

    <div class="mg-2">
      <div class="css-disabled-all">
        <button class="pd-1 bg-red">`css-disabled-all` to parent div only</button>
        <button class="pd-1 bg-red">`css-disabled-all` to parent div only</button>
        <button class="pd-1 bg-red">`css-disabled-all` to parent div only</button>
      </div>
      <button class="bg-red mg-2 pd-1 css-disabled">css-disabled</button>
    </div>

    <div class="mg-2">
      <div class="word-break-all">
        <button class="pd-1 bg-red">
          `word-break-all` to parent div only `word-break-all` to parent div only `word-break-all` to parent div only
          `word-break-all` to parent div only `word-break-all` to parent div only `word-break-all` to parent div only
          `word-break-all` to parent div only `word-break-all` to parent div only `word-break-all` to parent div only
          `word-break-all` to parent div only `word-break-all` to parent div only `word-break-all` to parent div only
        </button>
      </div>
      <button class="bg-red mg-2 pd-1 word-break">word-break</button>
    </div>

  </div>

  </div>
</template>

<script>
export default {
  name: 'Utils'
}
</script>
