function towelSort(matrix) {

    if (typeof matrix === 'undefined')
  
      return [];
  
  
  
    for (let i = 0; i < matrix.length; i++) {
  
      if (i % 2 !== 0)
  
        matrix[i].sort().reverse();
  
  
  
    }
  
    return matrix.flat();
  
}