import addCSS from "../../utils/addCSS.js"

const hideDiscounts = () => {
    addCSS(`
        li#discount_codes, li#discount_code_batches {
            display: none !important;
        }
    `);
}

export default hideDiscounts;