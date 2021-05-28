import { css } from "twin.macro"

const styles = css`
  /* Position and sizing of burger button */
  .bm-burger-button {
    display: none;
  }

  /* General sidebar styles */
  .bm-menu {
    ${"" /* background: #273089; */}
    padding: 3em 2em 0;
    font-size: 1.15em;
  }
  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #273089;
  }

  /* Wrapper for item list */
  ${
    "" /* .bm-item-list {
  color: #b8b7ad;
  padding: 0.8em;
} */
  }

  /* Individual item */
${
    "" /* .bm-item {
  display: inline-block;
} */
  }

/* Styling of overlay */
.bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`

export { styles }
