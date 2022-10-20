/*
GFG Medium

The stock span problem is a financial problem where we have a series of n daily price quotes for a stock and we need to calculate the span of stocks price for all n days. 

 The span Si of the stocks price on a given day i is defined as the maximum number of consecutive days just before the given day, for which the price of the stock on the current day is less than or equal to its price on the given day.

 For example, if an array of 7 days prices is given as {100, 80, 60, 70, 60, 75, 85}, then the span values for corresponding 7 days are {1, 1, 1, 2, 1, 4, 6}.

 */

function calculateSpan(price) {
  // code here
  let res = [];
  let st = [];

  for (let i = 0; i < price.length; i++) {
    while (price[st[st.length - 1]] <= price[i] && st.length != 0) {
      st.pop();
    }
    if (st.length === 0) {
      res.push(i + 1);
    } else {
      res.push(i - st[st.length - 1]);
    }
    st.push(i);
  }

  return res;
}
calculateSpan([100, 80, 60, 70, 60, 75, 85]);

/*
To implement this logic, we use a stack as an abstract data type to store the days i, h(i), h(h(i)), and so on. When we go from day i-1 to i, we pop the days when the price of the stock was less than or equal to price[i] and then push the value of day i back into the stack.
Following is the implementation of this method. 


We have to check also for a case when all the stock prices should be the same so therefore we have to just check whether the current stock price is bigger than the previous one or not. We will not pop from the stack when the current and previous stock prices are the same. 

*/
