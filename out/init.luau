-- Compiled with roblox-ts v3.0.0
local TS = _G[script]
local Bin = TS.import(script, script, "Bin")
local Signal = TS.import(script, script, "Signal")
local Spawn = TS.import(script, script, "Spawn")
local Clock = TS.import(script, script, "Clock")
local Future = TS.import(script, script, "Future")
local Ratelimit = TS.import(script, script, "Ratelimit")
return {
	Bin = Bin,
	Signal = Signal,
	Spawn = Spawn,
	Clock = Clock,
	Ratelimit = Ratelimit,
	Future = Future,
}
