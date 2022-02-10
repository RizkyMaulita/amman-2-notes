# PSEUDOCODE

## Variable

### Declare variable
- Pada saat mendeklarasikan sebuah variable, tipe data harus jelas. apakah dia berupa NUMBER / STRING / ARRAY / OBJECT / BOOLEAN / tipe data lainnya.
- Penamaan variable **disarankan** menggunakan **bahasa inggris**, bukan bahasa sehari-hari, serta harus **deskriptif**.
```
STORE <variableName> AS <data-type>
```
### Assignment Variable
1. Jika variable belum di deklarasi, maka dapat dilakukan deklarasi variable dan assign value pada variablenya
```
STORE <variableName> AS <data-type> WITH <value>

// atau

STORE <variableName> AS <data-type> WITH ANY VALUE

// atau

STORE <variableName> WITH ANY <data-type>
```
2. Jika variable sudah di deklarasi sebelumnya, maka yang dilakukan hanya assign value pada variablenya
```
SET <variableName> WITH <value>
```
## Display
> Untuk menampilkan output atau value yang diinginkan
```
STORE firstVariableName WITH ANY STRING
STORE secondVariableName WITH ANY STRING

// Menampilkan nilai dari firstVariableName
DISPLAY firstVariableName

// Menampilkan nilai dari firstVariableName dan secondVariableName yang digabung dengan string lain
DISPLAY "Value of <firstVariableName> is " CONCAT WITH firstVariableName CONCAT WITH " and value of <secondVariableName> is " CONCAT WITH secondVariableName
```
## Mathematical Operators
```
STORE variableName WITH ANY NUMBER

SET variableName WITH variableName PLUS 10        // penambahan
SET variableName WITH variableName MINUS 10       // pengurangan
SET variableName WITH variableName TIMES 10       // perkalian
SET variableName WITH variableName DIVIDE BY 10   // pembagian
SET variableName WITH variableName MODULUS BY 10  // modulus (sisa bagi)
```
## Conditional
1. Menggunakan **If - Else**
```
IF (statement)
  ...
ELSE IF (statement)
  ...
ELSE
  ...
END IF
```
2. Menggunakan **Switch - Case**
```
SWITCH variableName
  CASE firstValue
    ...
  CASE secondValue
    ...
  CASE thirdValue
    ...
  ...
END SWITCH
```
## Comparison Operators
```
STORE variableName WITH ANY NUMBER

IF variableName MORE THAN 10             // lebih dari 10
  ...
ELSE IF variableName MORE THAN EQUAL 10  // lebih dari sama dengan 10
  ...
ELSE IF variableName LESS THAN 10        // kurang dari 10
  ...
ELSE IF variableName LESS THAN EQUAL 10  // kurang dari sama dengan 10
  ...
ELSE IF variableName EQUAL 10            // sama dengan 10
  ...
ELSE IF variableName NOT EQUAL 10        // tidak sama dengan 10
  ...
END IF
```
## Looping
1. Menggunakan **For Loop**
```
STORE maxIncrement WITH ANY NUMBER
STORE i WITH 0

FOR i FROM 0 TO maxIncrement INCREMENT BY 1
  DISPLAY "Loop ke- " CONCAT WITH i
END FOR
```
2. Menggunakan **While Loop**
```
STORE maxIncrement WITH ANY NUMBER
STORE i WITH 0

WHILE i LESS THAN maxIncrement
  DISPLAY "Loop ke- " CONCAT WITH i
  SET i WITH i PLUS 1
END WHILE
```
3. Menggunakan **Do-While Loop**
```
STORE maxIncrement WITH ANY NUMBER
STORE i WITH 0

DO 
  DISPLAY "Loop ke-" CONCAT WITH i
  SET i WITH i PLUS 1
WHILE i LESS THAN maxIncrement
```

## Example 1
Buatlah pseudocode yang dapat menampilkan hasil convert data dari jumlah jam ke detik
```
STORE hours WITH ANY NUMBER
STORE seconds AS NUMBER

CALCULATE hours TIMES 3600
SET seconds WITH CALCULATION RESULT

DISPLAY seconds
```

## Example 2
Buatlah pseudocode untuk menyelesaikan problem ini
- William ingin menampilkan deretan nilai dari 1 sampai N.
- N adalah nilai akhir yang diinputkan.
- Jika William menginput N dengan nilai 100, maka program akan menampilkan deretan nilai 1, 2, 3, 4, 5, … , 100,serta berikan keterangan apakah nilai tersebut ganjil / genap

```
STORE N WITH ANY NUMBER
STORE i WITH 0

WHILE i LESS THAN N 
  STORE currentValue WITH i PLUS 1
  
  IF (currentValue MODULUS BY 2 EQUAL 0)
    DISPLAY currentValue CONCAT WITH " - " CONCAT WITH "genap"
  ELSE 
    DISPLAY currentValue CONCAT WITH " - " CONCAT WITH "ganjil"
  
  SET i WITH i PLUS 1
END WHILE
```