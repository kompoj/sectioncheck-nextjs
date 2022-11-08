#NoEnv ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir% ; Ensures a consistent starting directory.

RandChar(L)
{
	Characters := "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901234567890123456789001234567890"
	CharStr := ""

	Random, Rand, 1, 52
	CharStr := CharStr . SubStr(Characters, Rand, 1)

	Loop % L-1
	{
		Random, Rand, 1, StrLen(Characters)
		CharStr := CharStr . SubStr(Characters, Rand, 1)
	}
	Return CharStr
}

^g::
	randomchar := RandChar(6)
	send, % randomchar
return