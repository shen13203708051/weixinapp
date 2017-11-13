Page({
  data: {
    array:['a','b','c','d','e','f','g'
  ],
    words:['h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
  ],
    plain_1 : false,
    plain_2 : false,
    disabled_1 : false,
    disabled_2 : false
  },
  plus : function(e){
    let newWords=this.data.words
    let newArray=this.data.array
    let tichu1=newWords.shift()
    newArray.push(tichu1)
    this.setData({
    array : newArray,
    words : newWords
   })

    },

  minus : function(e){
    let newWords=this.data.words
    let newArray=this.data.array
    let tichu2=newArray.pop()
    newWords.unshift(tichu2)
    this.setData({
    array : newArray,
    words : newWords
   })
  }

})
