'use strict'

const buttons = document.querySelector('.buttons')
const result = document.querySelector('.result')

let clear = false
buttons.addEventListener('click', function (e)
{
 if (clear) result.textContent = '0'
 if (e.target.textContent == 'AC') return result.textContent = '0'
 if (!e.target.classList.contains('btn')) return
 if (e.target.textContent == '=') {
  try {
   result.textContent = eval(result.textContent)
  } catch (error) {
   console.error(error);
  }
  clear = true;
 } else {
  clear = false;
  if (result.textContent == '0') result.textContent = ''
  result.textContent += e.target.textContent
 }
})