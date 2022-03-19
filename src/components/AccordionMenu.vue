<template>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item border text-center">
      <h2 class="accordion-header mb-0" id="headingOne">
        <DefaultButton
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
          class="px-6 rounded-lg"
          >هودی</DefaultButton
        >
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body py-4 px-5">
          <strong>هودی های زیبا</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
