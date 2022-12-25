let hewans = [
  {nama:'kuda', type:'mamalia'},
  {nama:'paus',type:'mamalia'},
  {nama:'ayam',type:'telur'}
]
  let hasil = hewans.every(hewan=>{
    return hewan.type === 'mamalia'
  })


console.log(hasil)
