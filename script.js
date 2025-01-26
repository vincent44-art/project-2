document.getElementById('akanForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
     const year = parseInt(document.getElementById('year').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    
  
    if (!isValidDate(day, month)) {
      alert('Please enter a valid date.');
      return;
    }
  
    const dayOfWeek = calculateDayOfWeek(year,month, day);
    const akanName = getAkanName(dayOfWeek, gender);
  
    document.getElementById('result').textContent = `Your Akan name is ${akanName}`;
  });
  
  function isValidDate(day, month) {
      if (day <= 0 || day > 31) return false;
      if (month <= 0 || month > 12) return false;
      return true;
  }
  
  
  function calculateDayOfWeek(year,month,day) {
        const CC = Math.floor(year/100)
        const YY = year % 100;
        const MM = month;
        const DD = day;
  
        const dayOfWeek =( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
  
        return Math.floor(dayOfWeek);
  }
  
  function getAkanName(dayOfWeek, gender) {
    const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
  
      if (gender === 'male') {
          return maleNames[dayOfWeek];
      } else {
          return femaleNames[dayOfWeek];
      }
  }