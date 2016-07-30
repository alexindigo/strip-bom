// Latest version of npmjs.com/strip-bom doesn't support node below v4,
// and previous version has security issues, so just keep it in-house
module.exports = stripBOM;

/**
 * Strips UTF-8 BOM from the provided string
 *
 * @param   {string} str - string to strip BOM from
 * @returns {string} - string sans BOM
 */
function stripBOM(str)
{
  if (typeof str != 'string')
  {
    throw new TypeError('Expected a string, got ' + typeof str);
  }

  // Catches EFBBBF (UTF-8 BOM) because the buffer-to-string
  // conversion translates it to FEFF (UTF-16 BOM)
  if (str.charCodeAt(0) === 0xFEFF) {
    return str.slice(1);
  }

  return str;
}
