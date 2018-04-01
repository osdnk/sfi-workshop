# sfi-workshop :computer:
This repo consists of materials for workshop for Computer Science Festival in Cracow at 7 IV 2018

## Abstract

### 1. Theoretical Introduction 
* Why use cross-platform technologies? 
* Why use React Native?
* Why do use and why do not use Expo?
* Firebase! :cupid:

### 2. Hello world!
I strongly encourage you to use Expo XDE.
Let you follow https://docs.expo.io/versions/latest/introduction/installation.html in order to 
install XDE on your computer and app on your mobile phone. You could use emulator as well,
but that's not a part of this workshop

* What's React? 
 * App.js
 * What's js? Where's CSS?!
 * SampleClass and button
 *_Reacting_ on new props and state 

### 3. Exercise 1
We're living in a hurry and have no time to remember everything. :anger:

Let's make an app for adding todos and marking them as `finished` :+1:

Fortunately, someone has made this app already. Unluckily, bad hacker removed some lines from code and we need to repair it :worried:

#### Tips :eyes:
  * `TodoList.js`
    * :14 Well, you need to make completely new state (mind that you cannot modify immutable
    object :stop:) and give it to `setState` function in order to apply it to a new state and 
    rerender Component
    * :22 That's easier. Just add new item to list. Did you try push? Hah, remember that 
    state is _immutable_! :warning:
    * :33 Take a look that I made a `TodoItem` Component. Import it and render here. 
    
    I suppose you will encounter some issue with `key`. In React every component has to have
    own key so apply it just like normal prop e.g. ``key={`item_${i}`}``. 
    
    `onPress={() => this.markAsDone(i)}` Let you think for a while about it. Not just paste.
    
    * :38 Same as above, `Adder` also requires some function
  * `Adder.js`
    * :12 We need to invoke a method from props :crown:
    
### 4. Exercise 2
Now we wish to use also another device and synchronize data using *Firebase* :cloud:

#### Tips :eyes:
  * `TodoList.js`
    * :17 Just uncomment. But remember to think!
    * :24 Yes, receive every todo again. Just put them into state. Mind that you receive an object, 
    not an array: `const keys = Object.keys(data)` gives you keys as array. Mind that now you 
    need `key` field in `state.todos`
    * :33 Just set `isDone = true`
    * :53 That's not difficult 
  * `App.js`
    * :10 Just uncomment. But remember to think!
  
### 5. Exercise 3
Let's be honest. This code is a shit and it couldn't by used anywhere. Have you ever 
heard about MVP? \*Michaś :it: is talking about MVP\*

Look at the code! Maybe it looks like an overkill to use `Redux` here. Mein Gott, it's just a todoApp, but it's
essential to learn how to write good and scalable code.

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
    * :25 You need to implement some logic of filtering depending on `props.filter`
    * :60 && :66 There's some data coming from the store and it has to be appplied to a component 
    pros. Look at line :70. We're exporting component wrapped into datastore stuff
    
### 6. Extra exercise
It's a bit different and more creative one. :warning: It's a wrapper for a game I have written recently. It's 
not a difficult one. Game end when you tap black box and result is passed by function from
props. Write handling for the game and save data to firebase server if it's the best global
result. 
Then you could add authentication, ranking and whatever you wish. But don't try to do it 
now :ok_woman:
