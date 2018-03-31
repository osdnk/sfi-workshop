# sfi-workshop :computer:
This repo consists of materials for workshop for Computer Science Festival in Cracow at 7 IV 2018

## Abstract

### 1. Theoretical Introduction 
* Why to use cross-platform technologies? 
* Why to use React Native?
* Why to use and why not to use Expo?
* Firebase! :cupid:

### Hello world!
I strongly encourage you to Expo XDE.
Let you follow https://docs.expo.io/versions/latest/introduction/installation.html in order to 
install XDE on your computer and app on your mobile phone. You could use emulator as well,
but that's not a part of this workshop

* What's React? 
 * App.js
 * What's js? Where's CSS?!
 * SampleClass and button
 *_Reacting_ on new props and state 

### Exercise 1
We're living in hurry and have no time to remember everthing. :anger:

Let's make app for adding todos and marking them as `finished` :+1:

Fortunately, someone has made this app already. Unluckily, bad hacker removed some lines from code and we need to reapair it :worried:

#### Tips :eyes:
  * `TodoList.js`
    * :14 Well, you need to make completely new state (mind that you cannot modify immutable
    object) and give it to `setState` function in order to apply it to new state and 
    rerender Component
    * :22 That's easier. Just add new item to list. Did you try push? Hah, remember that 
    state is _immutable_! :warning:
    * :33 Take a look that I made a `TodoItem` Component. Import it and here to render. 
    
    I suppose you will encounter some issue with `key`. In React every component has to have
    own key so apply it just like normal prop. 
    
    `onPress={() => this.markAsDone(i)}` Let you think for a while about it. Not just paste.
    
    * :38 Same as above, `Adder` also require some function
  * `Adder.js`
    * :12 We need to invoke a method from props :crown:
    
### Exercise 2
Now we wish to use also another device and synchronize data using *Firebase* :cloud:

#### Tips :eyes:
  * `TodoList.js`
    * :17 Just uncomment. But remember to think!
    * :24 Yes, receive every todos again. Just put them into state. Mind that you receive objecty, 
    not an array: `const keys = Object.keys(data)` gives you keys as array. Mind that now you 
    need `key` field in `state.todos`
    * :33 Just set `isDone = true`
    * :53 Thet's not difficult 
  * `App.js`
    * :10 Just uncomment. But remember to think!
  
### Exercise 3
Let's be honest. This code is a shit and it couldn't by used anywhere. Have you ever 
heard about MVP? \*Michaś :it: is talking about MVP\*

Look at the code! Maybe it looks like overkill to use `Redux` here. Mein Got, it's just todoApp, but it's
essential to learn how to write a good and scalable code.

Take a look at `TodoList.js`. It's so simple! There's no logic, just a _view_

Now we wish to add filtering. This exercise is not so important. :poop: If you have no time,
just look at the solution and understand it. If you manage, try to fix `TODO`s 


#### Tips :eyes:
  * `App.js`. Just look. And think
  * `reducers/todos.js`
    * :5 `...state` means to rewrite every field of `state` object
    * :16 We need to add some field to store. Just uncomment if you wish
    * :8 Come here after `action.js` fixing. Then it would be understandable. You need to 
    modify current state and return it
  * `actions/index.js`
    * :6 toggling filter doesn't require any extra data. `({type: 'TOGGLE FILTER'})` is fine
  * `TodoList.js`
    * :25 You need implement some logic of filtering depending `props.filter`
    * :60 && :66 There's some data coming from store and they have to be appplied to component 
    pros. Look at line :70. We're exporting component wrapped into datastore stuff
    
#### Extra exercise
It's a bit different and more creative. :warning: It's wrapper for a game I wrote recently. It's 
not a diffilult one. Game end when you tap black box and result is passed by funtion from
props. Write handling for the game and save data to firebase server if it's the best global
result. 
Then you could add authentication, ranking and whatever you wish. But don't try to do it 
now :ok_woman:
