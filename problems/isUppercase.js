String.prototype.isUpperCase = function() {
    return (this.toUpperCase() === this.valueOf())
  }

  console.log('C'.isUpperCase())