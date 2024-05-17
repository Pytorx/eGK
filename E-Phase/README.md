# ITEC
A collection of all topics that we've learned so far
## Number systems
---
### Overview
- System of ten:
```
0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```
- Binary system (System of two, dualsystem): 
```
0, 1
``` 
- System of 16:
```
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
```
---
- Conversion: 2-er -> 10-er 
```
1     0     1    0     1    1
*     *     *    *     *    *
2^5   2^4   2^3  2^2   2^1  2^0
=     =     =    =     =    =
32  + 0   + 8 +   0  + 2  + 1 = 43 
```
---

- Conversion: 10-er -> 2-er
```
43  = 1 * 2^5 + 11
11  = 0 * 2^4 + 11
11  = 1 * 2^3 + 3
3   = 0 * 2^2 + 3
3   = 1 * 2^1 + 1
1   = 1 * 2^0 + 0
      =
      1 0 1 0 1 1
```
---
- Conversion: 16-er -> 10-er
```
A         2         D
*         *         *
16^2      16^1      16^0
=         =         =
A * 256 + 2 * 16 +  D * 1
= 10*256 + 2*16 + 13*1 
= 2605
```
---
- Conversion: 10-er -> 16-er
```

2605    =     10 * 16^2 + 45
45      =     2  * 16^1 + 13
13      =     13 * 16^0 + 0
              =
              10    2   13
                    =
              A     2   D
```
---
- Conversion: 2-er -> 16-er
```
   11 1010
    =           <- Fill up with zeros that a 4-er block is created
 0011 1010
    =
 3    A         <- Every 4-er block is displayed as a hexadecimal number
 ```
---

