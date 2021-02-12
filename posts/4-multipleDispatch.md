# Multiple dispatch for people who never sought a world beyond function overloading

I found it extremely tricky to understand the importance that a feature like 
multiple dispatch might offer, but as it always is the devil is in the details.
Someone with no idea about dispatch, let alone multiple dispatch 
, you might find this an interesting read. People with familiarity in the subject might point out the 
incompleteness of this explanation.
With that out of the way, lets start with an example that I think encapsualtes the essence and 
greater meaning multiple dispatch provides while being extremely obvious all along.

Imagine a situation where you are asked to design a game in Java with the following 
specification

1. A room consists of various types people 
  1. Husband
  2. Maid
  3. Wife

> The husband is a pianist and plays the **piano**, the maid's job is to keep the piano clean and wife 
> just regrets marrying a musician every time she sees the piano.
> Similarly, when the husband comes across the **fridge** he pours himself a drink, the maid restocks the 
> fridge and the wife checks the fride and updates her grocery list.
> The husband ignores __any other object__, wife draws its sketch, maid looks in awe.

__Problem Statement__ : Imagine this is a game you are developing, the user might be any of the following 
type of person and might interact with any kind of an object. You do not know what kind of person the user has actually picked, write code to ensure that the right action gets executed. 


Defining a person and all things he can interact with

```Java
// For sake of simplicity let us first consider the husband only
public interface Person {
  // Some common properties like name, etc.
  public void interact(EnvObj a);
  public void interact(Piano a);
  public void interact(Fridge a);
}
```

Defining the characters

```Java
public class Husband implements Person {
  public void interact(EnvObj a) { // print "ignore" 
  }
  public void interact(Piano a) { // print "play piano"
  }
  public void interact(Fridge a) { // print "pour drink"
  }
}
// ... similarly for other characters
```
Defining the objects

```Java
// Objects On Scene
interface EnvObject {
  // Some common properties like mass, acceleration, etc.
}
class Piano implements EnvObject {
}
// ... similarly for other objects
```

During code execution
``` Java
  public void encounters(Person p, EnvObject o) {
    p.interact(o); //is this even correct ?
  }
```

Is this logically sound ?
- At first look it might seem correct, but many will be quick to point out the obvious flaw.
  - It will always return **ignore**.

Another major drawback of this approach is the amount of code we might need to add if say we added,
a new object into this world called **burger**.
What do you do when you see a burger, you eat it.
But in our code, we have to individually define the action of eating a burger in each and every one of 
the class. ughh... what a drag.

What if we could define something that says,

(Person, Burger) - interact -> "just eat it."

In doing so we come across a scenario of unquestionable uncertainity,
(Husband, EnvObject) -> "ignore"
(Person, Burger) -> "Eat it"

Both of there definitions are correct in their own regard, but which is __more correct__ is obvious.

This is due to something known as __single dispatch__, we do not consider the 
actual implication of the argument, we simply resolve the caller ( must read dynamic dispatch and function overloading ).

To understand it in simple terms, it is like asking a man with his eyes closed to tell color of the 
crayons in his hand. There may exist many solutions to this problem, but the simplest is to open his eyes.

One interesting solution that I must follow this post with is the visitor pattern, 
Given two generic object types, we ensure that relevant method of theiry interaction is called without explicitly defining so.

Sources
[source 1: wiki.c2 article on Multiple Dispatch ](https://wiki.c2.com/?MultipleDispatch)
[source 2(Prototypes with Multiple Dispatch: An Expressive and Dynamic Object Model) ](https://www.cs.cmu.edu/~aldrich/papers/ecoop05pmd.pdf)