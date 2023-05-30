using System;
using System.Collections.Generic;


// array of insult strings
List<string> insults = new List<string> {
    "You look like what morning breath smells like.",
    "If you tried to give me cpr I would probably throw myself back under water",
    "I am not a fan of you",
    "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
    "I'd rather walk than be on the same plane as you",
    "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
    "Do you have to be so...like that?"
};


// for an empty array called indexes
List<int> indexes = new List<int>();

// random class assigned to "random" so we can use it later
Random random = new Random();

// integer named "length" which equals the number of insults -1 to show the maximum array index
int length = insults.Count - 1;

// while our array index count is less than 3
while (indexes.Count < 3)
{
    // candidate integer = random number between 0 and 6 (length assigned above)
    int candidate = random.Next(0, length);
    // int candidate = GetRandomInt(0, insults.Count)
    // if index does not contain the candidate selected (avoids duplicate) continue and add that candidate to the indexes array
    if (!indexes.Contains(candidate))
    {
        indexes.Add(candidate);
    }
}

// if less than 3, write the index to console until we get a total of 3 insults written
for (int i = 0; i < 3; i++)
{
    int index = indexes[i];
    Console.WriteLine(insults[index]);
}

// same as my for (int i = 0; i < 3; i++) loop above
foreach (int index in indexes)
{
    System.Console.WriteLine(insults[index]);
}

/*
 static int GetRandomInt(int min, int max) {
    Random randomInt = newRandom();
    return randomInt.Next(min, max);
}
*/