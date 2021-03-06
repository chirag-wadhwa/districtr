import { html } from "lit-html";

export default (radius, onChange, options) => html`
<legend>${options ? options.title : "Brush Size"}</legend>
<div class="slider-container">
  <input class="slider" type="range" value="${radius}" min="1" max="100" @change=${onChange}>
  <input class="slider-value" type="number" value="${radius}" min="1" max="100" @change=${onChange}>
</div>`;
