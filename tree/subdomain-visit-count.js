/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  let map = {};
  for(let i = 0; i < cpdomains.length; i++){
    let count = getCount(cpdomains[i]);
    let domains = getDomains(cpdomains[i]);
    for(let index = 0; index < domains.length; index++){
      let domain = domains[index];
      if(map[domain] === undefined){
          map[domain] = count;
      } else {
          map[domain] = map[domain] + count;
      }
    }
  }

  return Object.keys(map).reduce(function(acc, domain){
    acc.push(`${map[domain]} ${domain}`);
    return acc;
  }, []);
};


var getCount = function(cpDomain){
    return parseInt(cpDomain.slice(0, cpDomain.indexOf(' ')));
};

var getDomains = function(cpDomain){
  let domain = cpDomain.slice(cpDomain.indexOf(' ') + 1);
  let domainList = [];
  while(domain.length > 0){
    domainList.push(domain);
    if(domain.indexOf('.') < 0){
      break;
    }
    domain = domain.slice(domain.indexOf('.') + 1);
  }
  return domainList;
};
