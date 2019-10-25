var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  
  let mainEl = document.querySelector('main');
  mainEl.style.backgroundColor = 'var(--main-bg)';
  mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
  mainEl.classList.add('flex-ctr');
  
  let topMenuEl = document.querySelector('nav');
  topMenuEl.innerHTML = '<nav id="top-menu">';
  topMenuEl.style.height = '100%';
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
  topMenuEl.classList.add('flex-around');
  
  for (let menuLink of menuLinks) {
    let link1 = document.createElement('a');
    link1.innerHTML = menuLink.text;
    link1.setAttribute('href', menuLink.href);
    topMenuEl.appendChild(link1);
  }
  
  let subMenuEl = document.getElementById('sub-menu');
  subMenuEl.style.height = '100%';
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
  subMenuEl.classList.add('flex-around');
  
  subMenuEl.style.position = 'absolute';
  subMenuEl.style.top = '0';
  
  let topMenuLinks = document.getElementsByTagName('a');
  var showingSubMenu = false; 
  
  topMenuEl.addEventListener('click', evtDelegation); 
  
  function evtDelegation(event) {
    event.preventDefault();
    if (event.target.tagName !== 'A') return; 
    if (event.target.classList.contains('active')) {
      event.target.classList.remove('active'); 
      showingSubMenu === false; 
      subMenuEl.style.top = '0';
      return; 
    };
    Array.from(topMenuLinks).forEach(function(tag) {
      if (tag.classList.contains('active')) {
      tag.classList.remove('active');
      }
    if (event.target.textContent === 'about') {
       mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
     }
    })
    event.target.classList.add('active'); 
    if(event.target.textContent !== 'about') {
      showingSubMenu = true; 
    } else {
      showingSubMenu = false; 
    }
    if (showingSubMenu === true) {
       const idx = menuLinks.findIndex(el => el.text === event.target.textContent)
        buildSubMenu(idx);
      } else if (showingSubMenu === false) {
        subMenuEl.style.top = '0';
      }
  };
  
  function buildSubMenu(index) {
      var lilLinks = menuLinks[index].subLinks; 
      subMenuEl.style.top = '100%';
      //task 5.8
      subMenuEl.textContent = ''; 
      lilLinks.forEach(function(elem) {
        let link2 = document.createElement('a');
        link2.innerHTML = elem.text;
        link2.setAttribute('href', elem.href);
        subMenuEl.appendChild(link2);
      });
    }
  
  subMenuEl.addEventListener('click', evtDelegation2); 
  function evtDelegation2(evt) {
    evt.preventDefault();
    let sblk = evt.target;
    if (sblk.tagName !== 'A') return; 
    showingSubMenu === false;
    subMenuEl.style.top = '0';
    Array.from(topMenuLinks).forEach(function(tag2) {
      if (tag2.classList.contains('active')) {
        tag2.classList.remove('active');
      }
    })
    mainEl.innerHTML = `<h1>${sblk.textContent}</h1>`;
  }
  
  