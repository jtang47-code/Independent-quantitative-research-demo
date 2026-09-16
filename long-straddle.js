(function () {
var dailySnapshots = [
    ['2025-01-02', 100000.00, 0.00000000],
    ['2025-01-03', 100000.00, 0.00000000],
    ['2025-01-06', 100000.00, 0.00000000],
    ['2025-01-07', 100000.00, 0.00000000],
    ['2025-01-08', 100000.00, 0.00000000],
    ['2025-01-10', 100000.00, 0.00000000],
    ['2025-01-13', 100000.00, 0.00000000],
    ['2025-01-14', 100000.00, 0.00000000],
    ['2025-01-15', 100000.00, 0.00000000],
    ['2025-01-16', 100000.00, 0.00000000],
    ['2025-01-17', 99979.42, -0.00020583],
    ['2025-01-21', 99836.47, -0.00163532],
    ['2025-01-22', 100047.65, 0.00000000],
    ['2025-01-23', 99789.87, -0.00257786],
    ['2025-01-24', 100251.93, 0.00000000],
    ['2025-01-27', 108250.35, 0.00000000],
    ['2025-01-28', 106891.48, -0.01358875],
    ['2025-01-29', 106734.45, -0.01515904],
    ['2025-01-30', 106241.00, -0.02009349],
    ['2025-01-31', 106366.31, -0.01884042],
    ['2025-02-03', 105945.92, -0.02304429],
    ['2025-02-04', 105413.92, -0.02836427],
    ['2025-02-05', 105979.61, -0.02270742],
    ['2025-02-06', 105225.24, -0.03025112],
    ['2025-02-07', 101556.52, -0.06693834],
    ['2025-02-10', 100586.65, -0.07663703],
    ['2025-02-11', 99286.62, -0.08963735],
    ['2025-02-12', 99606.31, -0.08644042],
    ['2025-02-13', 100711.66, -0.07538690],
    ['2025-02-14', 99547.91, -0.08702446],
    ['2025-02-18', 98474.16, -0.09776187],
    ['2025-02-19', 98177.67, -0.10072678],
    ['2025-02-20', 99279.27, -0.08971084],
    ['2025-02-21', 101567.55, -0.06682798],
    ['2025-02-24', 100386.18, -0.07864176],
    ['2025-02-25', 101143.35, -0.07107002],
    ['2025-02-26', 100744.06, -0.07506295],
    ['2025-02-27', 100389.76, -0.07860587],
    ['2025-02-28', 100875.61, -0.07374744],
    ['2025-03-03', 103119.22, -0.05131135],
    ['2025-03-04', 104776.27, -0.03474081],
    ['2025-03-05', 106048.50, -0.02201853],
    ['2025-03-06', 105821.38, -0.02428969],
    ['2025-03-07', 107123.00, -0.01127351],
    ['2025-03-10', 105551.76, -0.02698595],
    ['2025-03-11', 105201.87, -0.03048477],
    ['2025-03-12', 106227.16, -0.02023192],
    ['2025-03-13', 105894.16, -0.02356188],
    ['2025-03-14', 105656.72, -0.02593627],
    ['2025-03-17', 105249.69, -0.03000664],
    ['2025-03-18', 105019.24, -0.03231108],
    ['2025-03-19', 105666.23, -0.02584121],
    ['2025-03-20', 104496.26, -0.03754088],
    ['2025-03-21', 103125.78, -0.05124574],
    ['2025-03-24', 103587.48, -0.04662867],
    ['2025-03-25', 103258.18, -0.04992173],
    ['2025-03-26', 104679.66, -0.03570693],
    ['2025-03-27', 104182.74, -0.04067607],
    ['2025-03-28', 104991.71, -0.03258637],
    ['2025-03-31', 106273.89, -0.01976460],
    ['2025-04-01', 106325.58, -0.01924775],
    ['2025-04-02', 104594.09, -0.03656264],
    ['2025-04-03', 116052.97, 0.00000000],
    ['2025-04-04', 130741.91, 0.00000000],
    ['2025-04-07', 134116.19, 0.00000000],
    ['2025-04-08', 134914.94, 0.00000000],
    ['2025-04-09', 128747.20, -0.06167739],
    ['2025-04-10', 128978.64, -0.05936295],
    ['2025-04-11', 122138.06, -0.12776877],
    ['2025-04-14', 113813.65, -0.21101287],
    ['2025-04-15', 107474.07, -0.27440867],
    ['2025-04-16', 115128.63, -0.19786301],
    ['2025-04-17', 111930.14, -0.22984798],
    ['2025-04-21', 114252.37, -0.20662569],
    ['2025-04-22', 110469.65, -0.24445286],
    ['2025-04-23', 111852.42, -0.23062518],
    ['2025-04-24', 111796.62, -0.23118315],
    ['2025-04-25', 110308.44, -0.24606495],
    ['2025-04-28', 108494.20, -0.26420736],
    ['2025-04-29', 108644.72, -0.26270219],
    ['2025-04-30', 109186.77, -0.25728164],
    ['2025-05-01', 112409.81, -0.22505125],
    ['2025-05-02', 118894.98, -0.16019960],
    ['2025-05-05', 120363.58, -0.14551352],
    ['2025-05-06', 116687.81, -0.18227130],
    ['2025-05-07', 116439.91, -0.18475026],
    ['2025-05-08', 120333.61, -0.14581323],
    ['2025-05-09', 117914.06, -0.17000880],
    ['2025-05-12', 130858.85, -0.04056084],
    ['2025-05-13', 142230.81, 0.00000000],
    ['2025-05-14', 145760.55, 0.00000000],
    ['2025-05-15', 143495.96, -0.02264595],
    ['2025-05-16', 144996.49, -0.00764061],
    ['2025-05-19', 141783.03, -0.03977524],
    ['2025-05-20', 141811.29, -0.03949266],
    ['2025-05-21', 138573.41, -0.07187143],
    ['2025-05-22', 136761.57, -0.08998984],
    ['2025-05-23', 133680.58, -0.12079977],
    ['2025-05-27', 138259.24, -0.07501311],
    ['2025-05-28', 137845.97, -0.07914587],
    ['2025-05-29', 137281.06, -0.08479494],
    ['2025-05-30', 137350.29, -0.08410267],
    ['2025-06-02', 139679.54, -0.06081011],
    ['2025-06-03', 141295.79, -0.04464762],
    ['2025-06-04', 142143.37, -0.03617188],
    ['2025-06-05', 142070.55, -0.03690004],
    ['2025-06-06', 145057.38, -0.00703171],
    ['2025-06-09', 145354.25, -0.00406302],
    ['2025-06-10', 146001.72, 0.00000000],
    ['2025-06-11', 145600.07, -0.00401645],
    ['2025-06-12', 145020.16, -0.00981560],
    ['2025-06-13', 145353.26, -0.00648456],
    ['2025-06-16', 145753.92, -0.00247796],
    ['2025-06-17', 146154.98, 0.00000000],
    ['2025-06-18', 144865.74, -0.01289238],
    ['2025-06-20', 146331.93, 0.00000000],
    ['2025-06-23', 144473.27, -0.01858656],
    ['2025-06-24', 144259.61, -0.02072322],
    ['2025-06-25', 143864.50, -0.02467429],
    ['2025-06-26', 143597.24, -0.02734687],
    ['2025-06-27', 143527.54, -0.02804390],
    ['2025-06-30', 143478.83, -0.02853099],
    ['2025-07-01', 143478.83, -0.02853099],
    ['2025-07-02', 143478.83, -0.02853099],
    ['2025-07-03', 143478.83, -0.02853099],
    ['2025-07-07', 143454.34, -0.02877593],
    ['2025-07-08', 143451.71, -0.02880219],
    ['2025-07-09', 143078.08, -0.03253854],
    ['2025-07-10', 142893.42, -0.03438505],
    ['2025-07-11', 143420.57, -0.02911355],
    ['2025-07-14', 143520.02, -0.02811908],
    ['2025-07-15', 143502.65, -0.02829276],
    ['2025-07-16', 144164.79, -0.02167143],
    ['2025-07-17', 142754.48, -0.03577447],
    ['2025-07-18', 142817.24, -0.03514690],
    ['2025-07-21', 141462.69, -0.04869240],
    ['2025-07-22', 143252.13, -0.03079805],
    ['2025-07-23', 143856.33, -0.02475600],
    ['2025-07-24', 143741.20, -0.02590731],
    ['2025-07-25', 141979.36, -0.04352565],
    ['2025-07-28', 141766.66, -0.04565275],
    ['2025-07-29', 141932.78, -0.04399149],
    ['2025-07-30', 141720.16, -0.04611773],
    ['2025-07-31', 142571.92, -0.03760014],
    ['2025-08-01', 144892.13, -0.01439800],
    ['2025-08-04', 140511.98, -0.05819951],
    ['2025-08-05', 139479.88, -0.06852049],
    ['2025-08-06', 140528.60, -0.05803333],
    ['2025-08-07', 140205.11, -0.06126819],
    ['2025-08-08', 140728.49, -0.05603440],
    ['2025-08-11', 140246.59, -0.06085340],
    ['2025-08-12', 142135.34, -0.04196592],
    ['2025-08-13', 143154.35, -0.03177580],
    ['2025-08-14', 140597.77, -0.05734157],
    ['2025-08-15', 142227.39, -0.04104543],
    ['2025-08-18', 140727.79, -0.05604144],
    ['2025-08-19', 140264.37, -0.06067559],
    ['2025-08-20', 140382.88, -0.05949049],
    ['2025-08-21', 139391.85, -0.06940077],
    ['2025-08-22', 139040.56, -0.07291367],
    ['2025-08-25', 137704.62, -0.08627309],
    ['2025-08-26', 137072.73, -0.09259204],
    ['2025-08-27', 136803.93, -0.09528002],
    ['2025-08-28', 136920.87, -0.09411059],
    ['2025-08-29', 136119.35, -0.10212575],
    ['2025-09-02', 134477.61, -0.11854318],
    ['2025-09-03', 134603.78, -0.11728146],
    ['2025-09-04', 135348.54, -0.10983392],
    ['2025-09-05', 135917.14, -0.10414788],
    ['2025-09-08', 135861.57, -0.10470356],
    ['2025-09-09', 135583.11, -0.10748824],
    ['2025-09-10', 134361.79, -0.11970142],
    ['2025-09-11', 134247.99, -0.12083940],
    ['2025-09-12', 134130.50, -0.12201435],
    ['2025-09-15', 133958.92, -0.12373006],
    ['2025-09-16', 134606.27, -0.11725661],
    ['2025-09-17', 136292.00, -0.10039933],
    ['2025-09-18', 135481.04, -0.10850885],
    ['2025-09-19', 134228.36, -0.12103569],
    ['2025-09-22', 131693.01, -0.14638919],
    ['2025-09-23', 131636.32, -0.14695609],
    ['2025-09-24', 132020.24, -0.14311689],
    ['2025-09-25', 133497.28, -0.12834652],
    ['2025-09-26', 132443.51, -0.13888424],
    ['2025-09-29', 132245.23, -0.14086696],
    ['2025-09-30', 132757.55, -0.13574381],
    ['2025-10-01', 137033.03, -0.09298902],
    ['2025-10-02', 135765.45, -0.10566485],
    ['2025-10-03', 135212.04, -0.11119889],
    ['2025-10-06', 134347.85, -0.11984082],
    ['2025-10-07', 133797.69, -0.12534235],
    ['2025-10-08', 134815.51, -0.11516419],
    ['2025-10-09', 135219.24, -0.11112691],
    ['2025-10-10', 135734.58, -0.10597347],
    ['2025-10-13', 134821.92, -0.11510012],
    ['2025-10-14', 134792.93, -0.11539004],
    ['2025-10-15', 134660.25, -0.11671676],
    ['2025-10-16', 134804.41, -0.11527516],
    ['2025-10-17', 134507.13, -0.11824803],
    ['2025-10-20', 134414.68, -0.11917251],
    ['2025-10-21', 134024.69, -0.12307243],
    ['2025-10-22', 133561.39, -0.12770540],
    ['2025-10-23', 133490.97, -0.12840963],
    ['2025-10-24', 132803.08, -0.13528852],
    ['2025-10-27', 133215.98, -0.13115948],
    ['2025-10-28', 133553.45, -0.12778484],
    ['2025-10-29', 134173.66, -0.12158272],
    ['2025-10-30', 132978.64, -0.13353286],
    ['2025-10-31', 132293.48, -0.14038447],
    ['2025-11-03', 132010.79, -0.14321144],
    ['2025-11-04', 131918.20, -0.14413734],
    ['2025-11-05', 132251.98, -0.14079953],
    ['2025-11-06', 131186.23, -0.15145700],
    ['2025-11-07', 130159.54, -0.16172393],
    ['2025-11-10', 126780.42, -0.19551506],
    ['2025-11-11', 126289.50, -0.20042433],
    ['2025-11-12', 126424.91, -0.19907023],
    ['2025-11-13', 128184.42, -0.18147508],
    ['2025-11-14', 127768.75, -0.18563175],
    ['2025-11-17', 128052.70, -0.18279228],
    ['2025-11-18', 129506.57, -0.16825365],
    ['2025-11-19', 128648.37, -0.17683563],
    ['2025-11-20', 130181.77, -0.16150163],
    ['2025-11-21', 129413.24, -0.16918690],
    ['2025-11-24', 128106.37, -0.18225560],
    ['2025-11-25', 129439.09, -0.16892840],
    ['2025-11-26', 129248.86, -0.17083070],
    ['2025-11-28', 128303.90, -0.18028031],
    ['2025-12-01', 127844.23, -0.18487704],
    ['2025-12-02', 127309.46, -0.19022467],
    ['2025-12-03', 127069.67, -0.19262261],
    ['2025-12-04', 126844.38, -0.19487553],
    ['2025-12-05', 126998.67, -0.19333255],
    ['2025-12-08', 126405.78, -0.19926150],
    ['2025-12-09', 125507.48, -0.20824453],
    ['2025-12-10', 127177.89, -0.19154042],
    ['2025-12-11', 127139.78, -0.19192151],
    ['2025-12-12', 126531.53, -0.19800397],
    ['2025-12-15', 127632.00, -0.18699932],
    ['2025-12-16', 124674.29, -0.21657635],
    ['2025-12-17', 126229.61, -0.20102320],
    ['2025-12-18', 125786.08, -0.20545851],
    ['2025-12-19', 125254.92, -0.21077011],
    ['2025-12-22', 124616.88, -0.21715052],
    ['2025-12-23', 125229.30, -0.21102626],
    ['2025-12-24', 124807.66, -0.21524265],
    ['2025-12-26', 124224.46, -0.22107473],
    ['2025-12-29', 122820.50, -0.23511433],
    ['2025-12-30', 122350.77, -0.23981163],
    ['2025-12-31', 121824.14, -0.24507792],
    ['2026-01-02', 120465.24, -0.25866693],
    ['2026-01-05', 123008.94, -0.23322990],
    ['2026-01-06', 124898.30, -0.21433634],
    ['2026-01-07', 127089.33, -0.19242601],
    ['2026-01-08', 126433.01, -0.19898923],
    ['2026-01-09', 127058.89, -0.19273036],
    ['2026-01-12', 126750.03, -0.19581904],
    ['2026-01-13', 127092.07, -0.19239856],
    ['2026-01-14', 127866.80, -0.18465126],
    ['2026-01-15', 127884.92, -0.18447010],
    ['2026-01-16', 127170.90, -0.19161029],
    ['2026-01-20', 127231.51, -0.19100417],
    ['2026-01-21', 127323.70, -0.19008233],
    ['2026-01-22', 127415.05, -0.18916878],
    ['2026-01-23', 127124.82, -0.19207109],
    ['2026-01-26', 126945.36, -0.19386565],
    ['2026-01-27', 128311.75, -0.18020183],
    ['2026-01-28', 128536.33, -0.17795604],
    ['2026-01-29', 129003.91, -0.17328020],
    ['2026-01-30', 127878.73, -0.18453198],
    ['2026-02-02', 130492.43, -0.15839502],
    ['2026-02-03', 133714.01, -0.12617918],
    ['2026-02-04', 138643.94, -0.07687991],
    ['2026-02-05', 139636.13, -0.06695799],
    ['2026-02-06', 144488.69, -0.01843237],
    ['2026-02-09', 147787.56, 0.00000000],
    ['2026-02-10', 146796.72, -0.00990843],
    ['2026-02-11', 151627.22, 0.00000000],
    ['2026-02-12', 152573.36, 0.00000000],
    ['2026-02-13', 154489.57, 0.00000000],
    ['2026-02-17', 149194.48, -0.05295086],
    ['2026-02-18', 149134.38, -0.05355182],
    ['2026-02-19', 147827.55, -0.06662015],
    ['2026-02-20', 151536.51, -0.02953058],
    ['2026-02-23', 157055.80, 0.00000000],
    ['2026-02-24', 158302.19, 0.00000000],
    ['2026-02-25', 156760.64, -0.01541558],
    ['2026-02-26', 159033.73, 0.00000000],
    ['2026-02-27', 158844.55, -0.00189175],
    ['2026-03-02', 159306.81, 0.00000000],
    ['2026-03-03', 158700.10, -0.00606709],
    ['2026-03-04', 158331.12, -0.00975687],
    ['2026-03-05', 158150.12, -0.01156683],
    ['2026-03-06', 158298.59, -0.01008220],
    ['2026-03-09', 157836.45, -0.01470356],
    ['2026-03-10', 157633.06, -0.01673745],
    ['2026-03-11', 157553.78, -0.01753031],
    ['2026-03-12', 157530.57, -0.01776233],
    ['2026-03-13', 157346.59, -0.01960213],
    ['2026-03-16', 156810.52, -0.02496289],
    ['2026-03-17', 156760.20, -0.02546607],
    ['2026-03-18', 156835.60, -0.02471209],
    ['2026-03-19', 156932.22, -0.02374590],
    ['2026-03-20', 157297.81, -0.02008996],
    ['2026-03-23', 156422.94, -0.02883867],
    ['2026-03-24', 156422.94, -0.02883867],
    ['2026-03-25', 156422.94, -0.02883867],
    ['2026-03-26', 156422.94, -0.02883867],
    ['2026-03-27', 156409.56, -0.02897251],
    ['2026-03-30', 156398.86, -0.02907944],
    ['2026-03-31', 156612.82, -0.02693982],
    ['2026-04-01', 156530.67, -0.02776139],
    ['2026-04-02', 156504.22, -0.02802585],
    ['2026-04-06', 156514.83, -0.02791981],
    ['2026-04-07', 156442.68, -0.02864128],
    ['2026-04-08', 156419.23, -0.02887574],
    ['2026-04-09', 156093.31, -0.03213497],
    ['2026-04-10', 156149.67, -0.03157132],
    ['2026-04-13', 155999.58, -0.03307227],
    ['2026-04-14', 155983.02, -0.03323784],
    ['2026-04-15', 156027.10, -0.03279703],
    ['2026-04-16', 156019.87, -0.03286939],
    ['2026-04-17', 156059.56, -0.03247246],
    ['2026-04-20', 155860.01, -0.03446794],
    ['2026-04-21', 155860.01, -0.03446794],
    ['2026-04-22', 155860.01, -0.03446794],
    ['2026-04-23', 155860.01, -0.03446794],
    ['2026-04-24', 155860.01, -0.03446794],
    ['2026-04-27', 155860.01, -0.03446794],
    ['2026-04-28', 155860.01, -0.03446794],
    ['2026-04-29', 155860.01, -0.03446794],
    ['2026-04-30', 155860.01, -0.03446794],
    ['2026-05-01', 155860.01, -0.03446794],
    ['2026-05-04', 155841.91, -0.03464896],
    ['2026-05-05', 155484.73, -0.03822078],
    ['2026-05-06', 156566.95, -0.02739852],
    ['2026-05-07', 157072.15, -0.02234658],
    ['2026-05-08', 157506.37, -0.01800437],
    ['2026-05-11', 157296.62, -0.02010184],
    ['2026-05-12', 156755.07, -0.02551733],
    ['2026-05-13', 155962.19, -0.03344616],
    ['2026-05-14', 156180.03, -0.03126775],
    ['2026-05-15', 155860.14, -0.03446664],
    ['2026-05-18', 155571.82, -0.03734984],
    ['2026-05-19', 155161.32, -0.04145482],
    ['2026-05-20', 155687.77, -0.03619035],
    ['2026-05-21', 155760.21, -0.03546601],
    ['2026-05-22', 155369.51, -0.03937297],
    ['2026-05-26', 156385.08, -0.02921726],
    ['2026-05-27', 156512.60, -0.02794205],
    ['2026-05-28', 156259.68, -0.03047123],
    ['2026-05-29', 156229.59, -0.03077218],
    ['2026-06-01', 155588.90, -0.03717911],
    ['2026-06-02', 155704.09, -0.03602716],
    ['2026-06-03', 156383.99, -0.02922816],
    ['2026-06-04', 155587.67, -0.03719141],
    ['2026-06-05', 155683.72, -0.03623083],
    ['2026-06-08', 155616.30, -0.03690511],
    ['2026-06-09', 156109.12, -0.03197683],
    ['2026-06-10', 156400.40, -0.02906402],
    ['2026-06-11', 156953.44, -0.02353365],
    ['2026-06-12', 155905.96, -0.03400845],
    ['2026-06-15', 154988.89, -0.04317921],
    ['2026-06-16', 155764.71, -0.03542099],
    ['2026-06-17', 155461.96, -0.03844848],
    ['2026-06-18', 154936.38, -0.04370426],
    ['2026-06-22', 155053.90, -0.04252910],
    ['2026-06-23', 155177.98, -0.04128826],
    ['2026-06-24', 156493.54, -0.02813263],
    ['2026-06-25', 156222.80, -0.03084006],
    ['2026-06-26', 156085.83, -0.03220979],
    ['2026-06-29', 154492.99, -0.04813821],
    ['2026-06-30', 153975.54, -0.05331263],
    ['2026-07-01', 153687.41, -0.05619394],
    ['2026-07-02', 153749.07, -0.05557733],
    ['2026-07-06', 153501.28, -0.05805527],
    ['2026-07-07', 153526.77, -0.05780040],
    ['2026-07-08', 152992.33, -0.06314481],
    ['2026-07-09', 152917.36, -0.06389446],
    ['2026-07-10', 152701.87, -0.06604935],
    ['2026-07-13', 152717.09, -0.06589715],
    ['2026-07-14', 152717.09, -0.06589715],
    ['2026-07-15', 152717.09, -0.06589715],
    ['2026-07-16', 152684.11, -0.06622697],
    ['2026-07-17', 152998.83, -0.06307981],
    ['2026-07-20', 152139.82, -0.07166984],
    ['2026-07-21', 152452.54, -0.06854268],
    ['2026-07-22', 152480.82, -0.06825988],
    ['2026-07-23', 152499.50, -0.06807310],
    ['2026-07-24', 152206.72, -0.07100083],
    ['2026-07-27', 151546.26, -0.07760542],
    ['2026-07-28', 151654.74, -0.07652070],
    ['2026-07-29', 152334.52, -0.06972283],
    ['2026-07-30', 152689.19, -0.06617621],
    ['2026-07-31', 152390.44, -0.06916362],
    ['2026-08-03', 151700.67, -0.07606138],
    ['2026-08-04', 151949.39, -0.07357421],
    ['2026-08-05', 152049.78, -0.07257023],
    ['2026-08-06', 151510.28, -0.07796526],
    ['2026-08-07', 151041.34, -0.08265463],
    ['2026-08-10', 150756.48, -0.08550323],
    ['2026-08-11', 150958.48, -0.08348323],
    ['2026-08-12', 150567.26, -0.08739545],
    ['2026-08-13', 150513.78, -0.08793023],
    ['2026-08-14', 150385.48, -0.08921323],
    ['2026-08-17', 150156.99, -0.09149813],
    ['2026-08-18', 150351.75, -0.08955059],
    ['2026-08-19', 150170.24, -0.09136564],
    ['2026-08-20', 150444.75, -0.08862058],
    ['2026-08-21', 150727.70, -0.08579102],
    ['2026-08-24', 151176.30, -0.08130504],
    ['2026-08-25', 151378.90, -0.07927904],
    ['2026-08-26', 150955.28, -0.08351530],
    ['2026-08-27', 150763.07, -0.08543739],
    ['2026-08-28', 151187.28, -0.08119525],
    ['2026-08-31', 151270.64, -0.08036163],
    ['2026-09-01', 151270.64, -0.08036163],
  ];

  var performanceRows = [
    ['Net P&L', '+$51,271 on $100,000 starting NAV'],
    ['Return on NAV', '+51.3%'],
    ['Sharpe / drawdown', '0.98 / -27.4%'],
    ['Average capital utilization', '31.0% of NAV'],
    ['Peak capital utilization', '97.9% of NAV'],
    ['Return on deployed capital*', '129.1%']
  ];

  var modelRows = [
    ['Winsorized HAR-RV + IV (selected)', 'Expanding pooled HAR regression using 1-, 5-, and 22-session realized variance plus current ATM implied variance; training features and targets are clipped at their past-only 1st/99th percentile bounds, with a 120-observation minimum.', '4.21%', '2.98%', '0.881', '0.859', '0.0539', true],
    ['Expiry-matched historical RV baseline', 'Same-horizon historical realized-variance mean; a persistence benchmark with no IV covariate.', '5.02%', '3.55%', '0.842', '0.804', '0.0800', false],
    ['RiskMetrics EWMA, split-adjusted close returns', 'Exponentially weighted squared daily split-adjusted close-to-close returns (lambda = 0.94), aggregated to the option horizon.', '13.53%', '9.00%', '0.741', '0.734', '0.2217', false],
    ['Gaussian GARCH(1,1), split-adjusted close returns', 'Normal-innovation conditional-variance model using past split-adjusted close returns; multi-step horizon forecast.', '16.72%', '10.59%', '0.686', '0.755', '0.2611', false],
    ['GJR-GARCH(1,1,1), split-adjusted close returns', 'GARCH with an asymmetric negative-return term; multi-step forecast captures leverage effects.', '18.99%', '11.92%', '0.643', '0.725', '0.3026', false]
  ];

  var dataDetails = [
    ['Underlying variance data', 'Regular-session realized variance and forward variance target', 'Regular-session 5-minute bars are used to estimate daily realized variance. For each signal, the model forecasts the expected realized variance from the next session through the option&apos;s expiration, using recent realized-variance patterns together with the matched pair&apos;s current ATM implied variance. A forward variance target is added to training only after its full measurement period has ended.'],
    ['Option contract selection', 'Same-DTE near-the-money pair', 'The signal pairs one call and one put at the exact same strike and expiration. Entry uses a flexible calendar-DTE range and a near-the-money strike filter around the unadjusted daily spot close. Each leg receives its own Black-Scholes IV and delta.'],
    ['Price bases', 'Raw spot for option state; split-adjusted hedge path', 'unadjusted daily close is used to match the option contract, calculate IV/Greeks, and size the initial position. Split-adjusted daily close is used for hedge P&L, with hedge shares converted through the split factor.'],
    ['Trade-bar pricing and execution', 'Option trade-bar reference marks', 'Signal, entry, and exit prices are simulated using actual option trade-bar prices as proxies for the unavailable bid-ask midpoint. Missing trading bars are excluded from the training and test sets because they are assumed unobtainable. Modeled execution then applies the configured half-spread around that mark.']
  ];

  var settings = [
    ['Starting capital', '$100,000', 'Sets the NAV base for the vega, hedge-capacity, and per-name buying-power budgets.'],
    ['Option selection', '28-32 calendar DTE; within 3% of raw spot', 'Keeps the signal and traded straddle aligned in maturity and moneyness.'],
    ['Maximum hold', '20 trading sessions', 'Limits capital duration and prevents an entered position from becoming unintended long-dated exposure.'],
    ['DTE exit', '5 DTE', 'Closes the position several days before expiration.'],
    ['Dollar-vega limit', '1% of current NAV per 1 volatility-point move', 'Sets B_V for each candidate: B_V = 0.01 × current NAV, so contracts are bounded by straddle vega.'],
    ['Buying power budget', '10% of current NAV', 'Sets the per-name buying-power ceiling. B_M is the minimum of buffer-adjusted remaining free buying power and 10% of current NAV.'],
    ['NAV buffer before entry', '10% of current NAV', 'Subtracts 10% of current NAV from marked free buying power before each entry, leaving that amount uncommitted as headroom.'],
    ['Hedge budget', '30% of current NAV', 'Sets B_H for potential future stock-hedge buying-power usage under the stress grid.'],
    ['Hedge target', '50% of net option delta', 'A deliberate partial hedge: it reduces directional risk while retaining market exposure.'],
    ['Stress grid', '0%, +/-5%, +/-10%, +/-15%', 'Converts spot-shock scenarios into stressed hedge buying power H_i.'],
    ['Hard contract cap', '10 contracts per leg', 'N_max is the final hard ceiling even when other budgets would allow more units.'],
    ['Option spread', '0.5% half-spread', 'Applies the modeled execution spread around the trade-bar reference mark.'],
    ['Risk-free rate', '4%', 'The Black-Scholes valuation and stress-repricing assumption.']
  ];

  var controls = [
    ['01', 'No-lookahead', 'Each score uses features and option marks available on the scoring date; a forward realized-variance target enters training only after its label period ends. Future marks and outcomes are never used to create the signal.'],
    ['02', 'Overfit control & Walk-forward', 'The model choice was made using 2024 development data, with 2025-2026 preserved as holdout period. Models are refit using only prior observations and evaluated on following days; walk-forward refitting reduces coefficient overfitting and helps the forecast adapt to different volatility regimes.'],
    ['03', 'Position sizing', 'The formula takes the most restrictive of total-vega capacity, future hedge capacity, current buying-power constraints, and the hard contract limit. This prevents an attractive signal from becoming an unbounded premium exposure and preserves space for diversification.'],
    ['04', 'Holding-path continuity', 'If a later option mark is absent for an entered position, the backtest carries forward that leg&apos;s last observed IV and reprices it with current raw spot and remaining term. The position is not removed because a later trade bar is missing, which could introduce look-ahead bias.'],
    ['05', 'Winsorized HAR-RV + IV selection', 'Before each fit, training-only feature and target values outside the 1st/99th percentiles are clipped to those percentile boundaries. This limits the influence of isolated short-term spikes while preserving the broader volatility-regime signal.']
  ];

  function detailCards(rows) {
    return rows.map(function (row) {
      return '<article class="case-detail-card"><div class="case-detail-label">' + row[0] + '</div><h3>' + row[1] + '</h3><p>' + row[2] + '</p></article>';
    }).join('');
  }

  function checkRows(rows) {
    return rows.map(function (row) {
      return '<div class="case-check-row"><span class="case-check-number">' + row[0] + '</span><h3>' + row[1] + '</h3><p>' + row[2] + '</p></div>';
    }).join('');
  }

  function modelTableRows() {
    return modelRows.map(function (row) {
      return '<tr class="' + (row[7] ? 'case-selected-row' : '') + '"><th scope="row">' + row[0] + '</th><td>' + row[1] + '</td><td>' + row[2] + '</td><td>' + row[3] + '</td><td>' + row[4] + '</td><td>' + row[5] + '</td><td>' + row[6] + '</td></tr>';
    }).join('');
  }

  function performanceTableRows() {
    return performanceRows.map(function (row) {
      return '<tr><th scope="row">' + row[0] + '</th><td>' + row[1] + '</td></tr>';
    }).join('');
  }

  function settingRows() {
    return settings.map(function (row) {
      return '<tr><th scope="row">' + row[0] + '</th><td>' + row[1] + '</td><td>' + row[2] + '</td></tr>';
    }).join('');
  }

  window.longStraddleView = function () {
    return `
      <main class="case-view" id="long-straddle">
        <section class="case-head" id="case-top">
          <div class="content-width">
            <div class="case-toolbar"><span class="case-kicker">Research demo / 02</span><a class="case-back" href="#home" data-route="home">Back to research overview <span>&larr;</span></a></div>
            <div class="case-title-row">
              <h1>Long Straddle with HAR Variance Forecasting</h1>
              <p>This research evaluates a long-volatility straddle strategy built on a heterogeneous autoregressive (HAR) forecast of future realized variance. It buys a matched near-the-money call and put when forecast realized variance is sufficiently above the variance implied by option prices, then partially hedges the combined option delta. The book remains long gamma and vega while retaining residual directional exposure.</p>
            </div>
            <div class="case-facts case-facts-compact">
              <div class="case-fact"><span>Evaluation period</span><strong>2025-01-01 &mdash; 2026-09-01</strong></div>
              <div class="case-fact"><span>Sessions evaluated</span><strong>417</strong></div>
              <div class="case-fact"><span>Research universe</span><strong>Fixed snapshot of 200 large-cap S&amp;P 500 names</strong></div>
            </div>
          </div>
        </section>

        <section class="case-section case-section-paper" id="performance">
          <div class="content-width">
            <div class="section-bar"><div class="eyebrow">01 / Performance</div></div>
            <div class="case-performance-grid">
              <div class="case-chart-card">
                <div class="case-chart-header"><div><h3>Net equity and drawdown</h3></div><div class="case-chart-controls" role="group" aria-label="Chart view"><button type="button" class="case-chart-control-active" data-long-straddle-chart-mode="equity" aria-pressed="true">Equity</button><button type="button" data-long-straddle-chart-mode="drawdown" aria-pressed="false">Drawdown</button></div></div>
                <div class="case-chart-legend"><span class="case-legend-strategy">Strategy net equity</span></div>
              <div class="case-chart-frame"><canvas id="case-long-straddle-equity-chart" role="img" aria-label="Net equity curve and drawdown chart for the Winsorized HAR-RV + IV long straddle with a 50% delta hedge"></canvas></div>
              </div>
              <aside class="case-summary-panel"><div class="case-summary-label">Ending NAV</div><div class="case-summary-value">1.51<span>&times;</span></div><p>The $100,000 starting NAV ends at $151,271 after modeled option and stock execution costs.</p><div class="case-summary-list"><div class="case-summary-row"><span>Model</span><strong>Expanding Winsorized HAR-RV + IV; 120-observation minimum</strong></div><div class="case-summary-row"><span>Signal</span><strong>Forecast variance edge at EOD; enter next trading day at the open</strong></div><div class="case-summary-row"><span>Position</span><strong>Matched near-the-money call + put</strong></div><div class="case-summary-row"><span>Hedge</span><strong>50% of net option delta; rebalanced daily</strong></div><div class="case-summary-row"><span>Exit</span><strong>5 DTE or 20-session maximum hold</strong></div></div></aside>
            </div>
            <div class="case-metrics">
              <div class="case-metric"><div class="case-metric-label">Total return</div><div class="case-metric-value">+51.3%</div></div>
              <div class="case-metric"><div class="case-metric-label">Annualized return</div><div class="case-metric-value">+28.4%</div></div>
              <div class="case-metric"><div class="case-metric-label">Annualized vol.</div><div class="case-metric-value">31.6%</div></div>
              <div class="case-metric"><div class="case-metric-label">Sharpe</div><div class="case-metric-value">0.98</div></div>
              <div class="case-metric"><div class="case-metric-label">Max drawdown</div><div class="case-metric-value">-27.4%</div></div>
              <div class="case-metric"><div class="case-metric-label">Trade win rate</div><div class="case-metric-value">46.2%</div></div>
              <div class="case-metric"><div class="case-metric-label">Profit factor</div><div class="case-metric-value">1.78</div></div>
            </div>
            <div class="case-matrix-grid case-performance-matrix-grid">
              <div class="case-matrix-card case-evaluation-card"><div class="card-overline">Performance evaluation</div><table class="case-evaluation-table"><thead><tr><th>Measure</th><th>Evaluation</th></tr></thead><tbody>${performanceTableRows()}</tbody></table><p class="case-table-note">*Return on deployed capital is net P&amp;L divided by average reserved capital.</p></div>
              <div class="case-note-block"><h3>Research Interpretations</h3><p>The strategy performs best during sharp market moves and periods of volatility repricing, rather than producing steady returns. Gains are strongest when realized movement or implied volatility rises enough to offset theta, hedge drag, and execution costs.</p><p>April&ndash;May 2025 generated a large portion of the gains. The April 3rd tariff shock produced large two-sided moves and higher volatility, while the subsequent pause and rebound gave back part of those gains. The May U.S.&ndash;China tariff truce on May 12th created another strong market move and volatility repricing.</p><p>Another strong period began in late January 2026 as volatility increased amid uncertainty around growth, rates, AI investment, and trade policy. Gains continued through February, then faded as markets stabilized and theta and hedge costs became more important and offset small gains.</p>
            </div>
          </div>
        </section>

        <section class="case-section case-section-light" id="data">
          <div class="content-width">
            <div class="section-bar"><div class="eyebrow">02 / Data construction</div></div>
            <div class="case-detail-grid case-data-detail-grid">${detailCards(dataDetails)}</div>

          </div>
        </section>

        <section class="case-section case-section-paper" id="model">
          <div class="content-width">
            <div class="section-bar"><div class="eyebrow">03 / Forecast Model Selection</div></div>
            <div class="case-paper-block"><div class="case-paper-block-header"><div><div class="case-paper-label">Research design</div><h3>Choose the forecast before the holdout evaluation</h3></div></div><p class="case-paper-copy">A set of variance-forecast candidates was compared on a common 2024 development period. The displayed economic evaluation is restricted to the 2025-01-01 through 2026-09-01 holdout period. Winsorized HAR-RV + IV was selected because it has the lowest forecast error and the strongest correlations among the candidates.</p></div>
            <div class="case-paper-block"><div class="case-paper-block-header"><div><div class="case-paper-label">sample candidate comparison</div><h3>Forecast quality before the holdout evaluation</h3></div></div><div class="case-evidence-table-wrap"><table class="case-evidence-table case-model-table"><colgroup><col class="case-evidence-feature"><col class="case-evidence-definition"><col span="5" class="case-evidence-stat"></colgroup><thead><tr><th>Candidate</th><th>Definition</th><th>RMSE</th><th>MAE</th><th>Pearson</th><th>Spearman</th><th>QLIKE</th></tr></thead><tbody>${modelTableRows()}</tbody></table></div><div class="case-model-footnotes" aria-label="Forecast metric definitions"><p>RMSE is the square root of mean squared forecast error and weights large misses more heavily; MAE is the average absolute forecast error. Both are expressed in annualized volatility percentage points; lower is better. Pearson measures linear association between forecast and realized RV, while Spearman measures rank association; values closer to +1 indicate stronger association. QLIKE is a variance-forecast loss that penalizes poor scale forecasts, especially underestimation; lower is better.</p></div></div>
            <div class="case-paper-block"><div class="case-paper-block-header"><div><div class="case-paper-label">Walk-forward protocol</div><h3>What is known on the scoring date</h3></div></div><table class="case-protocol-table"><tbody><tr><th scope="row">Features</th><td>For the selected Winsorized HAR-RV + IV: lag-1, five-session mean, and 22-session mean regular-session 5-minute realized variance plus current ATM implied variance.</td></tr><tr><th scope="row">Fit boundary</th><td>Only observations whose forward variance target has completed by the scoring date enter training; future target is never used for its own score.</td></tr><tr><th scope="row">Refit</th><td>The Winsorized HAR-RV + IV coefficients are refit on an expanding past-only sample before each signal day.</td></tr><tr><th scope="row">Selection</th><td>Eligible names are ranked by raw forecast variance edge (forecast variance minus ATM implied variance), and then pass sizing and buying-power gates.</td></tr></tbody></table></div>
          </div>
        </section>

        <section class="case-section case-section-light" id="sizing">
          <div class="content-width">
            <div class="section-bar"><div class="eyebrow">04 / Trade construction and sizing</div></div>
             <div class="case-paper-block"><div class="case-paper-block-header"><div><div class="case-paper-label">Sizing principle</div><h3>Risk-controlled, diversified position sizing</h3></div></div><p class="case-paper-copy">Each accepted candidate starts as one matched call-and-put pair. The sizing formula then takes the minimum of three capacity limits: total-vega capacity, future-hedge capacity, and current buying-power capacity; a hard contract cap is also applied. This controls risk at the name level, preserves room for delta hedges, and prevents one attractive signal from consuming the capital needed to diversify across other eligible names. A cheap option can still create a large vega or hedge requirement, so the formula does not size positions from option premium alone.</p></div>
            <div class="case-formula"><code>N<sub>i</sub> = floor [ min ( B<sub>V</sub> / |Vega<sub>i</sub>|, &nbsp; B<sub>H</sub> / H<sub>i</sub>, &nbsp; B<sub>M</sub> / M<sub>i</sub>, &nbsp; N<sub>max</sub> ) ]</code></div>
                          <div class="case-matrix-grid case-sizing-components-grid">
              <div class="case-matrix-card"><div class="card-overline">Formula components</div><table><tbody><tr><th scope="row"><code>B<sub>V</sub></code></th><td>Per-candidate dollar-vega limit, expressed as P&L dollars per one-volatility-point move.</td></tr><tr><th scope="row"><code>Vega<sub>i</sub></code></th><td>Total vega of one call-and-put straddle, in dollars per volatility point.</td></tr><tr><th scope="row"><code>B<sub>H</sub></code></th><td>Capacity reserved for potential future stock-hedge buying-power usage.</td></tr><tr><th scope="row"><code>H<sub>i</sub></code></th><td>Stressed future hedge buying-power requirement for an individual contract across the defined spot-move scenarios.</td></tr><tr><th scope="row"><code>B<sub>M</sub></code></th><td>Buying-power capacity allocated to the current name after preserving portfolio entry headroom and applying the per-name allocation limit.</td></tr><tr><th scope="row"><code>M<sub>i</sub></code></th><td>Current buying-power requirement for an individual contract, including the option position and its opening stock hedge.</td></tr><tr><th scope="row"><code>N<sub>max</sub></code></th><td>Hard maximum number of contracts per leg, applied after the other capacity checks.</td></tr></tbody></table></div></div>
            <div class="case-paper-block"><div class="case-paper-block-header"><div><div class="case-paper-label">Backtest Configuration</div><h3>Configuration samples</h3></div></div><div class="case-setting-table"><table><thead><tr><th>Control</th><th>Specification</th><th>Comments</th></tr></thead><tbody>${settingRows()}</tbody></table></div></div>
            <div class="case-paper-block"><div class="case-paper-block-header"><div><div class="case-paper-label">Trade lifecycle</div><h3>From signal to close</h3></div></div><div class="case-detail-grid case-lifecycle-grid"><article class="case-detail-card"><div class="case-detail-label">01 / Monitor</div><h3>Score the universe at EOD</h3><p>Compute the walk-forward forecast, ATM IV, and variance edge for each name. A candidate proceeds only if its same-strike/same-expiration pair falls inside the flexible DTE and near-the-money range around the unadjusted daily spot, and passes mark, sizing, and buying-power checks. An accepted signal is entered at the next session&apos;s open.</p></article><article class="case-detail-card"><div class="case-detail-label">02 / Size</div><h3>Set contracts and reserve capacity</h3><p>Apply <code>N<sub>i</sub> = floor [ min ( B<sub>V</sub> / |Vega<sub>i</sub>|, B<sub>H</sub> / H<sub>i</sub>, B<sub>M</sub> / M<sub>i</sub>, N<sub>max</sub> ) ]</code>. The ratios cap total vega, preserve stressed hedge capacity, check current per-name buying power, and enforce a hard contract cap. A zero-sized candidate is skipped.</p></article><article class="case-detail-card"><div class="case-detail-label">03 / Open</div><h3>Enter with a partial delta hedge</h3><p>Buy the selected number of calls and puts at one strike and expiration. Calculate each leg&apos;s Black-Scholes delta, then set stock hedge = -50% &times; 100 &times; contracts &times; (call delta + put delta). The opening hedge removes half of the combined option delta by design, retaining directional exposure.</p></article><article class="case-detail-card"><div class="case-detail-label">04 / Rebalance</div><h3>Partial gamma-scalp through the holding path</h3><p>On every subsequent trading day, update raw spot, remaining time, and IV marks. Reprice the options and adjust the stock hedge each available session toward 50% of the current net option delta.</p></article><article class="case-detail-card"><div class="case-detail-label">05 / Finance</div><h3>Monitor margin and buying power</h3><p>The research applies a 50% margin-rate proxy to short stock hedges. Long-option premium is debited, and <code>M<sub>i</sub></code> includes the current option requirement plus the initial 50%-delta-target hedge.  Available capacity is checked before each entry.</p></article><article class="case-detail-card"><div class="case-detail-label">06 / Close</div><h3>Apply exits and settle P&amp;L</h3><p>Close the straddle and unwind the hedge when the position has been held for 20 trading sessions or when the options have 5 days left before expiration as per the setups.</p></article></div></div>
          </div>
        </section>

        <section class="case-section case-section-paper" id="findings">
          <div class="content-width">
            <div class="section-bar"><div class="eyebrow">05 / Findings and attribution</div></div>
            <div class="case-paper-block"><div class="case-paper-block-header"><div><div class="case-paper-label">P&amp;L attribution</div><h3>What drives the return of the long straddle</h3></div></div></div>
            <div class="case-detail-grid case-attribution-grid"><article class="case-detail-card"><div class="case-detail-label">Gross option book</div><h3>+$83.7k</h3><p>Combined option-mark change before the $5.6k of option execution costs.</p></article><article class="case-detail-card"><div class="case-detail-label">Stock hedge</div><h3>-$25.6k</h3><p>Gross stock-hedge P&L before execution costs.</p></article><article class="case-detail-card"><div class="case-detail-label">Execution</div><h3>-$6.9k</h3><p>$5.6k of option costs plus $1.3k of stock-hedge costs.</p></article><article class="case-detail-card"><div class="case-detail-label">Net result</div><h3>+$51.3k</h3><p>Gross option book plus stock hedge less modeled execution costs.</p></article></div>
            <div class="case-greek-connectors" aria-label="Pathwise finite-difference Greek attribution"><span class="case-greek-branch" aria-hidden="true"></span><span class="case-greek-branch" aria-hidden="true"></span><span class="case-greek-branch" aria-hidden="true"></span><span class="case-greek-branch" aria-hidden="true"></span><div class="case-greek-connectors-label">Simplified sequential Black-Scholes attribution</div></div>
            <div class="case-detail-grid case-greek-attribution-grid"><article class="case-detail-card case-greek-card"><div class="case-detail-label">DELTA EFFECT</div><h3>+$51.1k</h3><p>First-order option P&amp;L from stock movement.</p></article><article class="case-detail-card case-greek-card"><div class="case-detail-label">GAMMA / CONVEXITY</div><h3>+$204.8k</h3><p>Nonlinear stock-movement P&amp;L after delta; the intended gamma-scalping source.</p></article><article class="case-detail-card case-greek-card"><div class="case-detail-label">VEGA / IV REPRICING</div><h3>+$81.8k</h3><p>Option P&amp;L from changes in the call-and-put implied-volatility marks.</p></article><article class="case-detail-card case-greek-card"><div class="case-detail-label">THETA / TIME DECAY + RESIDUAL</div><h3>-$253.8k</h3><p>Elapsed-time and carry effect, plus the residual reconciliation.</p></article></div>
            <div class="case-paper-block case-regime-summary"><div class="case-paper-block-header"><div><div class="case-paper-label">Regime interpretation</div><h3>Why is the payoff concentrated</h3></div></div><div class="case-regime-body"><p>The main gains came in three periods: early April and mid-May 2025 during the tariff shock and rebound, and late January–February 2026 as volatility rose again. April–May contributed about <strong>+$32.8k</strong>, while January–February added <strong>+$37.0k</strong>. Large stock moves generated strong gamma/convexity P&L, while the deliberately retained directional delta also contributed positively. Volatility repricing added further vega gains.</p><p>In April, the tariff announcement and subsequent pause created sharp two-sided moves that favored the long straddle. The May U.S.–China tariff truce produced another fast upside repricing. Early 2026 was more gradual, with rising macro, AI, and trade-policy uncertainty supporting both realized volatility and IV. These periods provided enough gamma and vega contribution to overcome theta and execution costs.</p><p>Once the shocks were absorbed, realized movement and IV repricing weakened while theta, hedge drag, and trading costs continued. March 2026, for example, gave back about <strong>$2.2k</strong>. The results therefore suggest that the strategy works best when gamma capture and vega gains are strong enough to offset the persistent cost of carrying long volatility, while the model’s predicted edge is generally consumed by frictions and time-decay in ordinary conditions.</p></div></div>
          </div>
        </section>

        <section class="case-section case-section-tint" id="controls"><div class="content-width"><div class="section-bar"><div class="eyebrow">06 / Pitfalls & risk controls</div></div><div class="case-check-table">${checkRows(controls)}</div></div></section>

        <section class="case-section case-section-dark" id="risks">
          <div class="content-width">
            <div class="section-bar"><div class="eyebrow">07 / Remaining risks and next steps</div></div>
            <div class="case-risk-layout"><div><h2>Open research items</h2></div><div class="case-risk-list"><div class="case-risk-row"><span class="case-risk-number">01</span><div><h3>Regime concentration</h3><p>April-May 2025 and January-February 2026 supplied most of the net gain. A longer history and additional untouched OOS periods are needed to test generalization.</p></div></div><div class="case-risk-row"><span class="case-risk-number">02</span><div><h3>Conditional post-spike exit</h3><p>Test early conditional exit rules after a sufficiently large IV jump or realized-volatility shock to reduce later IV correction and theta drag. This needs to be specified and evaluated on OOS data.</p></div></div><div class="case-risk-row"><span class="case-risk-number">03</span><div><h3>Mark quality</h3><p>Trade-bar closes and last-observed-IV repricing are research proxies; live implementation would require point-in-time BBO, fills, queue position, borrow, and margin rules.</p></div></div></div></div>
            <div class="case-footer-link"><a class="case-back" href="#home" data-route="home">Back to research overview <span>&larr;</span></a></div>
          </div>
        </section>

        <footer class="site-footer"><div class="content-width footer-inner"><div class="brand brand-footer"><span><strong>Independent Quantitative Research</strong><small>Jie Tang</small></span></div><div class="footer-right"><nav class="footer-links" aria-label="Contact links"><a href="https://www.linkedin.com/in/jie-tang-06983a15a/">LinkedIn</a><a href="mailto:tang.jieworking@outlook.com">tang.jieworking@outlook.com</a></nav><p class="footer-note">Not investment advice</p></div></div></footer>
      </main>
    `;
  };

  window.initLongStraddle = function () {
    var canvas = document.getElementById('case-long-straddle-equity-chart');
    var frame = canvas && canvas.parentElement;
    var buttons = document.querySelectorAll('[data-long-straddle-chart-mode]');
    if (!canvas || !frame) return;
    var mode = 'equity';
    var eventMarkers = [
      { date: '2025-04-03', label: "Apr 3 '25" },
      { date: '2025-05-12', label: "May 12 '25" },
      { date: '2026-01-27', label: "Jan 27 '26" }
    ];

    function drawdownValues() {
      return dailySnapshots.map(function (point) {
        return point[2];
      });
    }

    function draw() {
      var context = canvas.getContext('2d');
      if (!context) return;
      var equityValues = dailySnapshots.map(function (point) { return point[1] / 100000; });
      var values = mode === 'equity' ? equityValues : drawdownValues();
      var width = frame.clientWidth || 640;
      var height = window.innerWidth <= 700 ? 260 : 320;
      var ratio = window.devicePixelRatio || 1;
      var padding = { top: 23, right: 20, bottom: 36, left: 48 };
      var plotWidth = Math.max(width - padding.left - padding.right, 80);
      var plotHeight = height - padding.top - padding.bottom;
      var minValue = Math.min.apply(Math, values);
      var maxValue = Math.max.apply(Math, values);
      var min = mode === 'equity' ? 1 : Math.min(-.02, minValue - .02);
      var max = mode === 'equity' ? Math.max(1.6, maxValue + .03) : .01;
      var ticks = mode === 'equity'
        ? [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6].filter(function (tick) { return tick >= min && tick <= max; })
        : [0, -.05, -.10, -.15, -.20, -.25, -.30, -.35].filter(function (tick) { return tick >= min && tick <= max; });
      var x = function (index) { return padding.left + (index / Math.max(values.length - 1, 1)) * plotWidth; };
      var y = function (value) { return padding.top + ((max - value) / (max - min)) * plotHeight; };
      var fillReference = mode === 'equity' ? 1 : 0;

      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.clearRect(0, 0, width, height);
      context.fillStyle = '#fbfaf6';
      context.fillRect(0, 0, width, height);
      context.font = '10px Arial, sans-serif';
      context.textBaseline = 'middle';
      context.textAlign = 'left';

      ticks.forEach(function (tick) {
        var tickY = y(tick);
        context.beginPath();
        context.moveTo(padding.left, tickY);
        context.lineTo(width - padding.right, tickY);
        context.strokeStyle = '#d6dde4';
        context.lineWidth = 1;
        context.stroke();
        context.fillStyle = '#7d8995';
        context.fillText(mode === 'equity' ? tick.toFixed(2) + 'x' : Math.round(tick * 100) + '%', 8, tickY);
      });

      eventMarkers.forEach(function (marker) {
        var markerIndex = dailySnapshots.findIndex(function (point) { return point[0] === marker.date; });
        if (markerIndex < 0) return;
        context.save();
        context.beginPath();
        context.moveTo(x(markerIndex), padding.top);
        context.lineTo(x(markerIndex), height - padding.bottom);
        context.setLineDash([4, 4]);
        context.strokeStyle = '#7d9bb4';
        context.lineWidth = 1;
        context.stroke();
        context.restore();
      });

      context.beginPath();
      values.forEach(function (value, index) {
        if (index === 0) context.moveTo(x(index), y(value));
        else context.lineTo(x(index), y(value));
      });
      context.lineTo(x(values.length - 1), y(fillReference));
      context.lineTo(x(0), y(fillReference));
      context.closePath();
      context.fillStyle = 'rgba(35, 79, 119, 0.12)';
      context.fill();

      context.beginPath();
      values.forEach(function (value, index) {
        if (index === 0) context.moveTo(x(index), y(value));
        else context.lineTo(x(index), y(value));
      });
      context.strokeStyle = '#102f55';
      context.lineWidth = 2.5;
      context.lineJoin = 'round';
      context.lineCap = 'round';
      context.stroke();

      context.font = '600 9px Arial, sans-serif';
      context.fillStyle = '#567994';
      context.textBaseline = 'top';
      eventMarkers.forEach(function (marker, markerPosition) {
        var markerIndex = dailySnapshots.findIndex(function (point) { return point[0] === marker.date; });
        if (markerIndex < 0) return;
        context.textAlign = markerPosition === 0 ? 'right' : 'left';
        context.fillText(marker.label, x(markerIndex) + (markerPosition === 0 ? -4 : 4), padding.top + 4);
      });

      context.font = '10px Arial, sans-serif';
      context.fillStyle = '#7d8995';
      context.textBaseline = 'top';
      context.textAlign = 'center';
      Array.from(new Set([0, Math.round((dailySnapshots.length - 1) * 0.25), Math.round((dailySnapshots.length - 1) * 0.5), Math.round((dailySnapshots.length - 1) * 0.75), dailySnapshots.length - 1])).forEach(function (index) {
        context.fillText(dailySnapshots[index][0].slice(0, 7), x(index), height - 25);
      });
    }

    Array.prototype.forEach.call(buttons, function (button) {
      button.addEventListener('click', function () {
        mode = button.getAttribute('data-long-straddle-chart-mode');
        Array.prototype.forEach.call(buttons, function (item) {
          var active = item === button;
          item.classList.toggle('case-chart-control-active', active);
          item.setAttribute('aria-pressed', String(active));
        });
        draw();
      });
    });

    draw();
    if (window.ResizeObserver) {
      var observer = new ResizeObserver(draw);
      observer.observe(frame);
    } else {
      window.addEventListener('resize', draw);
    }
  };
}());
