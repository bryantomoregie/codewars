

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

  
  console.log(reverse('awesome')) // 'emosewa'


/*

awesome
    awesom e
        aweso m e
            awes o m e
                awe s o m e
                    aw e s o m e
                        a w e s o m e
                        once string.length === 1
                         {return string}

.unshift the result of .pop to a[0]

                            

return ()strimlet array = g[0]
*/

/*
    awesome 
    take the last letter (.pop) and stick it in the front (.unshift)
*/