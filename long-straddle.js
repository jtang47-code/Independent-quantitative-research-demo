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
    ['2025-01-16', 99981.46, -0.00018543],
    ['2025-01-17', 100256.01, 0.00000000],
    ['2025-01-21', 100257.35, 0.00000000],
    ['2025-01-22', 100420.13, 0.00000000],
    ['2025-01-23', 100055.94, -0.00364186],
    ['2025-01-24', 100206.55, -0.00213579],
    ['2025-01-27', 102960.72, 0.00000000],
    ['2025-01-28', 102649.96, -0.00310765],
    ['2025-01-29', 102819.74, -0.00140985],
    ['2025-01-30', 102663.62, -0.00297105],
    ['2025-01-31', 102792.59, -0.00168138],
    ['2025-02-03', 102705.03, -0.00255697],
    ['2025-02-04', 102662.35, -0.00298379],
    ['2025-02-05', 102762.66, -0.00198068],
    ['2025-02-06', 102508.47, -0.00452255],
    ['2025-02-07', 102262.27, -0.00698453],
    ['2025-02-10', 102339.06, -0.00621665],
    ['2025-02-11', 102113.72, -0.00847001],
    ['2025-02-12', 102219.91, -0.00740816],
    ['2025-02-13', 102287.49, -0.00673232],
    ['2025-02-14', 102249.76, -0.00710965],
    ['2025-02-18', 102203.85, -0.00756876],
    ['2025-02-19', 101956.12, -0.01004605],
    ['2025-02-20', 101871.11, -0.01089615],
    ['2025-02-21', 102369.50, -0.00591228],
    ['2025-02-24', 102617.50, -0.00343226],
    ['2025-02-25', 103279.05, 0.00000000],
    ['2025-02-26', 104131.99, 0.00000000],
    ['2025-02-27', 104345.49, 0.00000000],
    ['2025-02-28', 104829.01, 0.00000000],
    ['2025-03-03', 104605.70, -0.00223307],
    ['2025-03-04', 105400.01, 0.00000000],
    ['2025-03-05', 105616.48, 0.00000000],
    ['2025-03-06', 105760.43, 0.00000000],
    ['2025-03-07', 105709.93, -0.00050498],
    ['2025-03-10', 105746.76, -0.00013671],
    ['2025-03-11', 105735.59, -0.00024842],
    ['2025-03-12', 105735.59, -0.00024842],
    ['2025-03-13', 105735.59, -0.00024842],
    ['2025-03-14', 105735.59, -0.00024842],
    ['2025-03-17', 105479.48, -0.00280948],
    ['2025-03-18', 104852.71, -0.00907718],
    ['2025-03-19', 104885.39, -0.00875038],
    ['2025-03-20', 104856.40, -0.00904025],
    ['2025-03-21', 104140.95, -0.01619478],
    ['2025-03-24', 103879.87, -0.01880561],
    ['2025-03-25', 102894.07, -0.02866354],
    ['2025-03-26', 104601.80, -0.01158626],
    ['2025-03-27', 105685.55, -0.00074876],
    ['2025-03-28', 106579.77, 0.00000000],
    ['2025-03-31', 108090.40, 0.00000000],
    ['2025-04-01', 107415.93, -0.00674464],
    ['2025-04-02', 107776.78, -0.00313616],
    ['2025-04-03', 114866.46, 0.00000000],
    ['2025-04-04', 123464.25, 0.00000000],
    ['2025-04-07', 123676.52, 0.00000000],
    ['2025-04-08', 124345.27, 0.00000000],
    ['2025-04-09', 137459.83, 0.00000000],
    ['2025-04-10', 137686.64, 0.00000000],
    ['2025-04-11', 135671.86, -0.02014772],
    ['2025-04-14', 127107.17, -0.10579463],
    ['2025-04-15', 126735.13, -0.10951505],
    ['2025-04-16', 127257.10, -0.10429538],
    ['2025-04-17', 124776.75, -0.12909882],
    ['2025-04-21', 124168.15, -0.13518491],
    ['2025-04-22', 124548.13, -0.13138507],
    ['2025-04-23', 126160.34, -0.11526293],
    ['2025-04-24', 125434.36, -0.12252279],
    ['2025-04-25', 123794.69, -0.13891944],
    ['2025-04-28', 122700.64, -0.14985994],
    ['2025-04-29', 121902.42, -0.15784214],
    ['2025-04-30', 118327.84, -0.19358800],
    ['2025-05-01', 124637.62, -0.13049015],
    ['2025-05-02', 122765.41, -0.14921224],
    ['2025-05-05', 120601.60, -0.17085034],
    ['2025-05-06', 120990.99, -0.16695644],
    ['2025-05-07', 120967.75, -0.16718889],
    ['2025-05-08', 121096.87, -0.16589770],
    ['2025-05-09', 120798.86, -0.16887779],
    ['2025-05-12', 123436.41, -0.14250222],
    ['2025-05-13', 129573.21, -0.08113428],
    ['2025-05-14', 128792.12, -0.08894519],
    ['2025-05-15', 131074.36, -0.06612274],
    ['2025-05-16', 130126.62, -0.07560019],
    ['2025-05-19', 128504.13, -0.09182504],
    ['2025-05-20', 128422.29, -0.09264349],
    ['2025-05-21', 131485.57, -0.06201064],
    ['2025-05-22', 131782.93, -0.05903710],
    ['2025-05-23', 130928.58, -0.06758060],
    ['2025-05-27', 130538.53, -0.07148108],
    ['2025-05-28', 131098.63, -0.06588003],
    ['2025-05-29', 130510.35, -0.07176281],
    ['2025-05-30', 130334.88, -0.07351753],
    ['2025-06-02', 128754.50, -0.08932140],
    ['2025-06-03', 131739.24, -0.05947393],
    ['2025-06-04', 132657.29, -0.05029341],
    ['2025-06-05', 132967.42, -0.04719219],
    ['2025-06-06', 132476.75, -0.05209884],
    ['2025-06-09', 133168.92, -0.04517719],
    ['2025-06-10', 132975.54, -0.04711099],
    ['2025-06-11', 131276.26, -0.06410378],
    ['2025-06-12', 130722.21, -0.06964426],
    ['2025-06-13', 132392.46, -0.05294177],
    ['2025-06-16', 131367.72, -0.06318914],
    ['2025-06-17', 131368.80, -0.06317835],
    ['2025-06-18', 130779.49, -0.06907145],
    ['2025-06-20', 129568.38, -0.08118259],
    ['2025-06-23', 130915.63, -0.06771011],
    ['2025-06-24', 131601.25, -0.06085382],
    ['2025-06-25', 131288.66, -0.06397972],
    ['2025-06-26', 131873.80, -0.05812838],
    ['2025-06-27', 133835.95, -0.03850689],
    ['2025-06-30', 133094.64, -0.04591999],
    ['2025-07-01', 136787.73, -0.00898911],
    ['2025-07-02', 135668.00, -0.02018639],
    ['2025-07-03', 136101.33, -0.01585304],
    ['2025-07-07', 134746.97, -0.02939668],
    ['2025-07-08', 134348.54, -0.03338098],
    ['2025-07-09', 134431.52, -0.03255113],
    ['2025-07-10', 135379.37, -0.02307263],
    ['2025-07-11', 134544.06, -0.03142579],
    ['2025-07-14', 135092.95, -0.02593688],
    ['2025-07-15', 134378.64, -0.03307999],
    ['2025-07-16', 137430.22, -0.00256414],
    ['2025-07-17', 136649.11, -0.01037529],
    ['2025-07-18', 136636.01, -0.01050626],
    ['2025-07-21', 137332.82, -0.00353812],
    ['2025-07-22', 138809.00, 0.00000000],
    ['2025-07-23', 139487.01, 0.00000000],
    ['2025-07-24', 139869.34, 0.00000000],
    ['2025-07-25', 138673.26, -0.01196075],
    ['2025-07-28', 137285.66, -0.02583679],
    ['2025-07-29', 139129.66, -0.00739677],
    ['2025-07-30', 139649.12, -0.00220213],
    ['2025-07-31', 139174.10, -0.00695236],
    ['2025-08-01', 140259.53, 0.00000000],
    ['2025-08-04', 139897.02, -0.00362513],
    ['2025-08-05', 139282.40, -0.00977135],
    ['2025-08-06', 140600.23, 0.00000000],
    ['2025-08-07', 142274.56, 0.00000000],
    ['2025-08-08', 141597.97, -0.00676593],
    ['2025-08-11', 141829.13, -0.00445428],
    ['2025-08-12', 140778.44, -0.01496115],
    ['2025-08-13', 142777.89, 0.00000000],
    ['2025-08-14', 143983.11, 0.00000000],
    ['2025-08-15', 142560.39, -0.01422720],
    ['2025-08-18', 142620.69, -0.01362418],
    ['2025-08-19', 143978.82, -0.00004283],
    ['2025-08-20', 145563.53, 0.00000000],
    ['2025-08-21', 144395.39, -0.01168139],
    ['2025-08-22', 144481.20, -0.01082327],
    ['2025-08-25', 143240.38, -0.02323146],
    ['2025-08-26', 143378.91, -0.02184617],
    ['2025-08-27', 143411.18, -0.02152350],
    ['2025-08-28', 142039.41, -0.03524120],
    ['2025-08-29', 140877.19, -0.04686337],
    ['2025-09-02', 139359.65, -0.06203875],
    ['2025-09-03', 139445.41, -0.06118112],
    ['2025-09-04', 140765.82, -0.04797703],
    ['2025-09-05', 140974.75, -0.04588777],
    ['2025-09-08', 138770.76, -0.06792764],
    ['2025-09-09', 140496.07, -0.05067459],
    ['2025-09-10', 140982.90, -0.04580629],
    ['2025-09-11', 143213.89, -0.02349636],
    ['2025-09-12', 143857.98, -0.01705548],
    ['2025-09-15', 142126.47, -0.03437052],
    ['2025-09-16', 143471.80, -0.02091723],
    ['2025-09-17', 143958.06, -0.01605467],
    ['2025-09-18', 143496.68, -0.02066844],
    ['2025-09-19', 142597.17, -0.02966351],
    ['2025-09-22', 140825.90, -0.04737624],
    ['2025-09-23', 141851.89, -0.03711640],
    ['2025-09-24', 143343.26, -0.02220266],
    ['2025-09-25', 142036.57, -0.03526961],
    ['2025-09-26', 142284.94, -0.03278586],
    ['2025-09-29', 142883.93, -0.02679599],
    ['2025-09-30', 144033.18, -0.01530344],
    ['2025-10-01', 143481.47, -0.02082058],
    ['2025-10-02', 143206.12, -0.02357408],
    ['2025-10-03', 144540.37, -0.01023154],
    ['2025-10-06', 144035.03, -0.01528494],
    ['2025-10-07', 144421.12, -0.01142408],
    ['2025-10-08', 144503.55, -0.01059980],
    ['2025-10-09', 144182.99, -0.01380533],
    ['2025-10-10', 144751.33, -0.00812192],
    ['2025-10-13', 144486.61, -0.01076913],
    ['2025-10-14', 144310.77, -0.01252752],
    ['2025-10-15', 144491.34, -0.01072188],
    ['2025-10-16', 144183.96, -0.01379564],
    ['2025-10-17', 144190.75, -0.01372772],
    ['2025-10-20', 144131.16, -0.01432367],
    ['2025-10-21', 144114.85, -0.01448675],
    ['2025-10-22', 143962.07, -0.01601456],
    ['2025-10-23', 143950.41, -0.01613114],
    ['2025-10-24', 143836.82, -0.01726708],
    ['2025-10-27', 143843.69, -0.01719835],
    ['2025-10-28', 143918.85, -0.01644679],
    ['2025-10-29', 143687.44, -0.01876084],
    ['2025-10-30', 143650.68, -0.01912848],
    ['2025-10-31', 143542.59, -0.02020933],
    ['2025-11-03', 143607.16, -0.01956361],
    ['2025-11-04', 142990.80, -0.02572728],
    ['2025-11-05', 143022.60, -0.02540921],
    ['2025-11-06', 142993.31, -0.02570214],
    ['2025-11-07', 143065.02, -0.02498509],
    ['2025-11-10', 142814.43, -0.02749095],
    ['2025-11-11', 143080.63, -0.02482894],
    ['2025-11-12', 143128.50, -0.02435023],
    ['2025-11-13', 143113.21, -0.02450317],
    ['2025-11-14', 143119.08, -0.02444450],
    ['2025-11-17', 142886.26, -0.02677270],
    ['2025-11-18', 142044.65, -0.03518871],
    ['2025-11-19', 143023.82, -0.02539709],
    ['2025-11-20', 142831.30, -0.02732222],
    ['2025-11-21', 142936.09, -0.02627433],
    ['2025-11-24', 142574.29, -0.02989238],
    ['2025-11-25', 142553.64, -0.03009888],
    ['2025-11-26', 143513.18, -0.02050347],
    ['2025-11-28', 143045.86, -0.02517663],
    ['2025-12-01', 142883.91, -0.02679619],
    ['2025-12-02', 143689.18, -0.01874348],
    ['2025-12-03', 144067.18, -0.01496347],
    ['2025-12-04', 143260.75, -0.02302780],
    ['2025-12-05', 143157.57, -0.02405955],
    ['2025-12-08', 142806.20, -0.02757329],
    ['2025-12-09', 143691.93, -0.01871592],
    ['2025-12-10', 144013.29, -0.01550236],
    ['2025-12-11', 145584.31, 0.00000000],
    ['2025-12-12', 144412.93, -0.01171380],
    ['2025-12-15', 143375.48, -0.02208828],
    ['2025-12-16', 143135.24, -0.02449068],
    ['2025-12-17', 143850.74, -0.01733566],
    ['2025-12-18', 144187.75, -0.01396560],
    ['2025-12-19', 144700.04, -0.00884267],
    ['2025-12-22', 144179.73, -0.01404585],
    ['2025-12-23', 144222.52, -0.01361794],
    ['2025-12-24', 144140.14, -0.01444170],
    ['2025-12-26', 143799.80, -0.01784512],
    ['2025-12-29', 145064.25, -0.00520061],
    ['2025-12-30', 144436.92, -0.01147394],
    ['2025-12-31', 144032.90, -0.01551413],
    ['2026-01-02', 143425.28, -0.02159033],
    ['2026-01-05', 143559.82, -0.02024494],
    ['2026-01-06', 143582.88, -0.02001433],
    ['2026-01-07', 146459.84, 0.00000000],
    ['2026-01-08', 147169.88, 0.00000000],
    ['2026-01-09', 147090.43, -0.00079443],
    ['2026-01-12', 146669.77, -0.00500107],
    ['2026-01-13', 147530.06, 0.00000000],
    ['2026-01-14', 147440.58, -0.00089484],
    ['2026-01-15', 147807.80, 0.00000000],
    ['2026-01-16', 147807.80, 0.00000000],
    ['2026-01-20', 147807.80, 0.00000000],
    ['2026-01-21', 147807.80, 0.00000000],
    ['2026-01-22', 147807.80, 0.00000000],
    ['2026-01-23', 147807.80, 0.00000000],
    ['2026-01-26', 147807.80, 0.00000000],
    ['2026-01-27', 147807.80, 0.00000000],
    ['2026-01-28', 147807.80, 0.00000000],
    ['2026-01-29', 147807.80, 0.00000000],
    ['2026-01-30', 147807.80, 0.00000000],
    ['2026-02-02', 147807.80, 0.00000000],
    ['2026-02-03', 147807.80, 0.00000000],
    ['2026-02-04', 147807.80, 0.00000000],
    ['2026-02-05', 147807.80, 0.00000000],
    ['2026-02-06', 147807.80, 0.00000000],
    ['2026-02-09', 147807.80, 0.00000000],
    ['2026-02-10', 147765.30, -0.00042508],
    ['2026-02-11', 148030.82, 0.00000000],
    ['2026-02-12', 148248.16, 0.00000000],
    ['2026-02-13', 147807.66, -0.00440492],
    ['2026-02-17', 147751.94, -0.00496216],
    ['2026-02-18', 147703.01, -0.00545145],
    ['2026-02-19', 147647.43, -0.00600722],
    ['2026-02-20', 147314.47, -0.00933684],
    ['2026-02-23', 147064.19, -0.01183968],
    ['2026-02-24', 147336.29, -0.00911866],
    ['2026-02-25', 146917.97, -0.01330182],
    ['2026-02-26', 147763.09, -0.00485063],
    ['2026-02-27', 147751.24, -0.00496918],
    ['2026-03-02', 147769.84, -0.00478320],
    ['2026-03-03', 148602.41, 0.00000000],
    ['2026-03-04', 148145.80, -0.00456612],
    ['2026-03-05', 147836.90, -0.00765512],
    ['2026-03-06', 148454.16, -0.00148254],
    ['2026-03-09', 148066.90, -0.00535512],
    ['2026-03-10', 146911.25, -0.01691157],
    ['2026-03-11', 147103.32, -0.01499093],
    ['2026-03-12', 146692.76, -0.01909651],
    ['2026-03-13', 147849.13, -0.00753282],
    ['2026-03-16', 146427.05, -0.02175356],
    ['2026-03-17', 146542.33, -0.02060080],
    ['2026-03-18', 146505.66, -0.02096753],
    ['2026-03-19', 146687.82, -0.01914594],
    ['2026-03-20', 147393.03, -0.01209383],
    ['2026-03-23', 146152.84, -0.02449572],
    ['2026-03-24', 146168.27, -0.02434141],
    ['2026-03-25', 146474.49, -0.02127919],
    ['2026-03-26', 145644.76, -0.02957650],
    ['2026-03-27', 146098.90, -0.02503512],
    ['2026-03-30', 146271.96, -0.02330446],
    ['2026-03-31', 146708.09, -0.01894323],
    ['2026-04-01', 146287.04, -0.02315372],
    ['2026-04-02', 145757.41, -0.02845001],
    ['2026-04-06', 145261.05, -0.03341363],
    ['2026-04-07', 145747.95, -0.02854457],
    ['2026-04-08', 144594.91, -0.04007503],
    ['2026-04-09', 145760.10, -0.02842307],
    ['2026-04-10', 145398.42, -0.03203994],
    ['2026-04-13', 145908.55, -0.02693863],
    ['2026-04-14', 145878.82, -0.02723586],
    ['2026-04-15', 145871.73, -0.02730676],
    ['2026-04-16', 145757.14, -0.02845272],
    ['2026-04-17', 145757.14, -0.02845272],
    ['2026-04-20', 145757.14, -0.02845272],
    ['2026-04-21', 145757.14, -0.02845272],
    ['2026-04-22', 145757.14, -0.02845272],
    ['2026-04-23', 145757.14, -0.02845272],
    ['2026-04-24', 145757.14, -0.02845272],
    ['2026-04-27', 145757.14, -0.02845272],
    ['2026-04-28', 145757.14, -0.02845272],
    ['2026-04-29', 145757.14, -0.02845272],
    ['2026-04-30', 145757.14, -0.02845272],
    ['2026-05-01', 145659.54, -0.02942865],
    ['2026-05-04', 143946.64, -0.04655765],
    ['2026-05-05', 145745.37, -0.02857037],
    ['2026-05-06', 145189.48, -0.03412928],
    ['2026-05-07', 145627.98, -0.02974429],
    ['2026-05-08', 145427.88, -0.03174532],
    ['2026-05-11', 146808.30, -0.01794114],
    ['2026-05-12', 146087.16, -0.02515247],
    ['2026-05-13', 146182.88, -0.02419527],
    ['2026-05-14', 146214.59, -0.02387820],
    ['2026-05-15', 146581.05, -0.02021357],
    ['2026-05-18', 147136.90, -0.01465511],
    ['2026-05-19', 148397.54, -0.00204870],
    ['2026-05-20', 148963.27, 0.00000000],
    ['2026-05-21', 148100.69, -0.00862581],
    ['2026-05-22', 147116.53, -0.01846739],
    ['2026-05-26', 146922.02, -0.02041247],
    ['2026-05-27', 146745.97, -0.02217299],
    ['2026-05-28', 146793.70, -0.02169572],
    ['2026-05-29', 146915.84, -0.02047433],
    ['2026-06-01', 147007.04, -0.01956224],
    ['2026-06-02', 147012.47, -0.01950803],
    ['2026-06-03', 147359.73, -0.01603541],
    ['2026-06-04', 146701.94, -0.02261330],
    ['2026-06-05', 146687.87, -0.02275403],
    ['2026-06-08', 146737.17, -0.02226101],
    ['2026-06-09', 147143.47, -0.01819801],
    ['2026-06-10', 146825.24, -0.02138025],
    ['2026-06-11', 147111.82, -0.01851448],
    ['2026-06-12', 146413.99, -0.02549283],
    ['2026-06-15', 146001.37, -0.02961897],
    ['2026-06-16', 146295.77, -0.02667503],
    ['2026-06-17', 146283.55, -0.02679720],
    ['2026-06-18', 145655.10, -0.03308170],
    ['2026-06-22', 145964.51, -0.02998761],
    ['2026-06-23', 145709.93, -0.03253341],
    ['2026-06-24', 146873.43, -0.02089840],
    ['2026-06-25', 146970.74, -0.01992533],
    ['2026-06-26', 145899.94, -0.03063325],
    ['2026-06-29', 144654.17, -0.04309099],
    ['2026-06-30', 145421.36, -0.03541912],
    ['2026-07-01', 146388.68, -0.02574594],
    ['2026-07-02', 145671.28, -0.03291990],
    ['2026-07-06', 145150.40, -0.03812866],
    ['2026-07-07', 148187.08, -0.00776190],
    ['2026-07-08', 149471.45, 0.00000000],
    ['2026-07-09', 146460.31, -0.03011141],
    ['2026-07-10', 145899.12, -0.03572328],
    ['2026-07-13', 146180.70, -0.03290751],
    ['2026-07-14', 146896.03, -0.02575420],
    ['2026-07-15', 146241.75, -0.03229693],
    ['2026-07-16', 145794.14, -0.03677308],
    ['2026-07-17', 145794.14, -0.03677308],
    ['2026-07-20', 145722.02, -0.03749424],
    ['2026-07-21', 145860.31, -0.03611142],
    ['2026-07-22', 145473.70, -0.03997750],
    ['2026-07-23', 145383.08, -0.04088372],
    ['2026-07-24', 145415.90, -0.04055549],
    ['2026-07-27', 145224.67, -0.04246778],
    ['2026-07-28', 145330.29, -0.04141160],
    ['2026-07-29', 145374.30, -0.04097146],
    ['2026-07-30', 145270.03, -0.04201419],
    ['2026-07-31', 145426.39, -0.04045058],
    ['2026-08-03', 145495.78, -0.03975670],
    ['2026-08-04', 145729.33, -0.03742114],
    ['2026-08-05', 145745.16, -0.03726291],
    ['2026-08-06', 145663.78, -0.03807671],
    ['2026-08-07', 145457.49, -0.04013957],
    ['2026-08-10', 145554.79, -0.03916657],
    ['2026-08-11', 146237.73, -0.03233713],
    ['2026-08-12', 145345.56, -0.04125890],
    ['2026-08-13', 145270.62, -0.04200827],
    ['2026-08-14', 145113.70, -0.04357743],
    ['2026-08-17', 144742.02, -0.04729430],
    ['2026-08-18', 145064.63, -0.04406818],
    ['2026-08-19', 144896.49, -0.04574958],
    ['2026-08-20', 145217.30, -0.04254147],
    ['2026-08-21', 145140.40, -0.04331050],
    ['2026-08-24', 145360.65, -0.04110799],
    ['2026-08-25', 146195.06, -0.03276389],
    ['2026-08-26', 145589.57, -0.03881875],
    ['2026-08-27', 145233.56, -0.04237889],
    ['2026-08-28', 145145.44, -0.04326005],
    ['2026-08-31', 145315.53, -0.04155919],
    ['2026-09-01', 145315.53, -0.04155919],
  ];

  var performanceRows = [
    ['Net P&L', '+$45,316 on $100,000 starting NAV'],
    ['Return on NAV', '+45.3%'],
    ['Sharpe / drawdown', '1.29 / -19.4%'],
    ['Average capital utilization', '40.8% of NAV'],
    ['Peak capital utilization', '99.3% of NAV'],
    ['Return on deployed capital*', '82.9%']
  ];

  var modelRows = [
    ['Pooled rolling HAR-RV + IV', 'Rolling pooled regression of forward variance on lag-1, five-session mean, and 22-session mean realized variance, plus current ATM IV².', '5.00%', '3.65%', '0.846', '0.804', '0.0812', true],
    ['Expiry-matched historical RV baseline', 'Trailing historical realized variance averaged at the option&apos;s remaining horizon; persistence benchmark without an IV covariate.', '5.28%', '3.75%', '0.839', '0.807', '0.0831', false],
    ['RiskMetrics EWMA, close returns', 'Exponentially weighted squared daily close-to-close returns (&lambda; = 0.94), aggregated to the option horizon.', '14.04%', '9.52%', '0.741', '0.736', '0.2288', false],
    ['Gaussian GARCH(1,1), close returns', 'Normal-innovation conditional-variance model using past squared close returns and lagged variance; multi-step horizon forecast.', '17.25%', '11.03%', '0.684', '0.757', '0.2641', false],
    ['GJR-GARCH(1,1,1), close returns', 'GARCH with an asymmetric negative-return term; multi-step horizon forecast captures leverage effects.', '19.40%', '12.38%', '0.640', '0.730', '0.3058', false]
  ];

  var dataDetails = [
    ['Underlying volatility data', 'Intraday realized variance', 'Regular-session five-minute bars are converted into log returns, whose squared values are summed to obtain daily realized variance. The HAR model then uses the previous day&apos;s variance together with five- and 22-session rolling averages.'],
    ['Option contract selection', 'Matched near-the-money pair', 'The signal pairs one call and one put at the same strike and expiration. The selected pair is approximately 25-35 calendar days from expiration and within 5% of spot; each leg receives its own Black-Scholes implied volatility and delta.'],
    ['Forward variance target', 'Forward realized-variance target', 'The target is annualized realized variance through the selected option expiration. It is only known after the forward period, so it is never used for same-session scoring or selection.'],
    ['Trade-bar pricing and execution', 'Option trade-bar reference marks', 'Signal, entry, and exit prices are simulated using actual option trade-bar prices as proxies for the unavailable bid-ask midpoint. Missing trading bars are excluded from the training and test sets because they are treated as unobtainable. Modeled execution then applies the configured half-spread around that mark.']
  ];

  var settings = [
    ['Starting capital', '$100,000', 'Sets the NAV base assumption for the sizing budgets and portfolio buying power.'],
    ['Option selection', '25-35 DTE; Strike within 5% of spot', 'Keeps the signal and traded straddle in the same maturity and moneyness neighborhood.'],
    ['Maximum hold', '20 trading sessions', 'A risk and capital-duration limit. It prevents a long-volatility position from becoming an unintended long-dated exposure.'],
    ['Expiration floor', '1 calendar day', 'Closes the position before expiration.'],
    ["Risk budget", '1% NAV / name', 'Sizing-formula input B_R. It limits the modeled stress loss allocated to one name; 1% is a personal risk-appetite and control-level choice.'],
    ["Hedge budget", '30% NAV / name', 'Sizing-formula input B_H. It reserves room for future stock-hedge adjustments; 30% is a personal control level chosen to keep hedge capacity available.'],
    ['Stress grid', '+/-5%, +/-10%, +/-15%', 'The grid converts spot-shock scenarios into stress loss and hedge requirements sensitivity checks needed for sizing-formula inputs R_i and H_i.'],
    ['Option spread', '1% half-spread; $0.03 floor', 'Apply to the option trade-bar reference mark to simulate execution price.'],
    ['Risk-free rate', '4%', 'The input used in Black-Scholes valuation and stress re-pricing.']
  ];

  var controls = [
    ['01', 'No-lookahead', 'Each score uses features available before the scoring date; the forward target enters the fitting sample only after that period ends. Future option marks, realized returns, and trade outcomes are not used in scoring or selection.'],
    ['02', 'Overfit control & Walk-forward', 'The model choice was made using 2024 development data, with 2025-2026 preserved as a holdout period. Models are refit using only prior observations and evaluated on following days; rolling windows reduce coefficient overfitting and help the forecast adapt to different volatility regimes.'],
    ['03', 'Position sizing', 'The formula takes the most restrictive of stress loss, future hedge capacity, and current buying-power constraints. This prevents an attractive signal from becoming an unbounded premium exposure and preserves space for diversification.'],
    ['04', 'Holding-path continuity', 'If a later option mark is absent for an entered position, the backtest carries forward the last observed leg implied volatility and reprices the option using the current stock price and remaining time rather than removing the trade. Removing an entered trade solely because a later mark is unavailable could introduce look-ahead bias.']
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
              <p>This research evaluates a long-volatility straddle strategy built on a heterogeneous autoregressive (HAR) forecast of future realized variance. It buys a matched near-the-money call and put when forecast realized variance is sufficiently above the variance implied by option prices, then delta-hedges the position so returns are driven primarily by realized movement and the gamma-scalping mechanism rather than the stock&apos;s net direction.</p>
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
                <div class="case-chart-frame"><canvas id="case-long-straddle-equity-chart" role="img" aria-label="Net equity curve and drawdown chart for the HAR-modeled long straddle"></canvas></div>
              </div>
              <aside class="case-summary-panel"><div class="case-summary-label">Ending NAV</div><div class="case-summary-value">1.45<span>&times;</span></div><p>The $100,000 starting NAV ends at $145,316 after modeled option and stock execution costs.</p><div class="case-summary-list"><div class="case-summary-row"><span>Model</span><strong>Pooled rolling HAR-RV + IV</strong></div><div class="case-summary-row"><span>Signal</span><strong>Forecast variance edge at EOD; enter next trading day at the open</strong></div><div class="case-summary-row"><span>Position</span><strong>Matched near-the-money call + put</strong></div><div class="case-summary-row"><span>Hedge</span><strong>Pathwise delta hedge</strong></div><div class="case-summary-row"><span>Exit</span><strong>20-session maximum hold or 1 DTE</strong></div></div></aside>
            </div>
            <div class="case-metrics">
              <div class="case-metric"><div class="case-metric-label">Total return</div><div class="case-metric-value">+45.3%</div></div>
              <div class="case-metric"><div class="case-metric-label">Annualized return</div><div class="case-metric-value">+27.4%</div></div>
              <div class="case-metric"><div class="case-metric-label">Annualized vol.</div><div class="case-metric-value">21.3%</div></div>
              <div class="case-metric"><div class="case-metric-label">Sharpe</div><div class="case-metric-value">1.29</div></div>
              <div class="case-metric"><div class="case-metric-label">Max drawdown</div><div class="case-metric-value">-19.4%</div></div>
              <div class="case-metric"><div class="case-metric-label">Trade win rate</div><div class="case-metric-value">53.6%</div></div>
              <div class="case-metric"><div class="case-metric-label">Profit factor</div><div class="case-metric-value">2.27</div></div>
            </div>
            <div class="case-matrix-grid case-performance-matrix-grid">
              <div class="case-matrix-card case-evaluation-card"><div class="card-overline">Performance evaluation</div><table class="case-evaluation-table"><thead><tr><th>Measure</th><th>Evaluation</th></tr></thead><tbody>${performanceTableRows()}</tbody></table><p class="case-table-note">*Deployed capital is the average daily buying-power reservation for open positions, including option debits, initial stock-hedge requirements, and opening stock costs.</p></div>
              <div class="case-note-block"><h3>Research Interpretations</h3><p>This strategy is designed to benefit from large, unexpected market moves rather than generate steady income. It can earn when realized movement or implied volatility reprices enough to overcome theta, delta-hedging drag, and execution costs.</p><p>April–May 2025 accounts for nearly half of the gain: $22.2k, or 49.1% of net profit, came from that window. After the April 2 reciprocal-tariff announcement, the long-volatility exposure benefited from sharp market moves and option repricing. The April 9 tariff pause then triggered an equity rebound and volatility normalization, giving back part of the shock-era gain.</p><p>After the April giveback, NAV recovered from $120.6k on May 5 to $145.6k on August 20. Intermittent market moves and volatility repricing were enough to offset option time decay, hedge adjustments, and execution costs, producing a gradual recovery. The strategy performs best when volatility rises or markets move sharply; in calmer periods, time decay and trading costs can offset small gains.</p></div>
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
            <div class="case-paper-block"><div class="case-paper-block-header"><div><div class="case-paper-label">Research design</div><h3>Choose the forecast before the holdout evaluation</h3></div></div><p class="case-paper-copy">A set of commonly used volatility-forecast candidates was compared on a common 2024 development sample. The displayed economic evaluation is restricted to the 2025-01-01 through 2026-09-01 holdout period. The pooled rolling HAR-RV + IV specification was selected because it combines the lowest error and strong linear association among the declared candidates.</p></div>
            <div class="case-paper-block"><div class="case-paper-block-header"><div><div class="case-paper-label">sample candidate comparison</div><h3>Forecast quality before the holdout evaluation</h3></div></div><div class="case-evidence-table-wrap"><table class="case-evidence-table case-model-table"><colgroup><col class="case-evidence-feature"><col class="case-evidence-definition"><col span="5" class="case-evidence-stat"></colgroup><thead><tr><th>Candidate</th><th>Definition</th><th>RMSE</th><th>MAE</th><th>Pearson</th><th>Spearman</th><th>QLIKE</th></tr></thead><tbody>${modelTableRows()}</tbody></table></div><div class="case-model-footnotes" aria-label="Forecast metric definitions"><p>RMSE is the square root of mean squared forecast error and weights large misses more heavily; MAE is the average absolute forecast error. Both are expressed in annualized volatility percentage points, lower is better. Pearson measures linear association between forecast and realized RV, while Spearman measures rank association; values closer to +1 indicate stronger association. QLIKE is a variance-forecast loss that penalizes poor scale forecasts, especially underestimation, lower is better.</p></div></div>
            <div class="case-paper-block"><div class="case-paper-block-header"><div><div class="case-paper-label">Walk-forward protocol</div><h3>What is known on the scoring date</h3></div></div><table class="case-protocol-table"><tbody><tr><th scope="row">Features</th><td>For the selected HAR-RV + IV candidate: lagged daily realized variance, prior five-session and 22-session average variance, and current near-the-money implied volatility where available.</td></tr><tr><th scope="row">Fit boundary</th><td>Only observations strictly before the scoring date enter the fit. A training target is the future realized variance through that row&apos;s selected option expiry.</td></tr><tr><th scope="row">Refit</th><td>The pooled HAR-RV + IV coefficients are refit as the rolling window advances. The model is not one static fit for the entire test period.</td></tr><tr><th scope="row">Selection</th><td>Eligible names are ranked by raw forecast variance minus at-the-money implied variance. Names with a variance edge larger than the threshold were processed through the sizing and buying-power gates.</td></tr></tbody></table></div>
          </div>
        </section>

        <section class="case-section case-section-light" id="sizing">
          <div class="content-width">
            <div class="section-bar"><div class="eyebrow">04 / Trade construction and sizing</div></div>
             <div class="case-paper-block"><div class="case-paper-block-header"><div><div class="case-paper-label">Sizing principle</div><h3>Risk-controlled, diversified position sizing</h3></div></div><p class="case-paper-copy">Each accepted candidate starts as one matched call-and-put pair. The sizing formula then takes the minimum of three limits: stress-loss capacity, future hedge capacity, and current buying-power capacity. This controls risk at the name level, preserves room for delta hedges, and prevents one attractive signal from consuming the capital needed to diversify across other eligible names. A cheap option can still create a large hedge requirement, so the formula does not size positions from option premium alone.</p></div>
            <div class="case-formula"><code>N<sub>i</sub> = floor [ min ( B<sub>R</sub> / R<sub>i</sub>, &nbsp; B<sub>H</sub> / H<sub>i</sub>, &nbsp; B<sub>M</sub> / M<sub>i</sub> ) ]</code></div>
             <div class="case-matrix-grid case-sizing-components-grid"><div class="case-matrix-card"><div class="card-overline">Formula components</div><table><tbody><tr><th scope="row"><code>B<sub>R</sub></code></th><td>Stress-risk budget per name: the dollar loss budget allocated to one underlying.</td></tr><tr><th scope="row"><code>R<sub>i</sub></code></th><td>Stress loss per contract: the worst modeled loss for one straddle contract across the configured stress scenarios.</td></tr><tr><th scope="row"><code>B<sub>H</sub></code></th><td>Hedge-capacity budget per name: NAV reserved for potential future stock-hedge adjustments.</td></tr><tr><th scope="row"><code>H<sub>i</sub></code></th><td>Stressed hedge buying power per contract: the largest required hedge buying-power usage across the stress scenarios.</td></tr><tr><th scope="row"><code>B<sub>M</sub></code></th><td>Current margin or buying-power budget: the portfolio capacity still available for a new position.</td></tr><tr><th scope="row"><code>M<sub>i</sub></code></th><td>Current buying power per contract: the option debit or margin plus the initial stock-hedge requirement for one contract.</td></tr></tbody></table></div></div>
            <div class="case-paper-block"><div class="case-paper-block-header"><div><div class="case-paper-label">Backtest Configuration</div><h3>Configuration samples</h3></div></div><div class="case-setting-table"><table><thead><tr><th>Control</th><th>Specification</th><th>Comments</th></tr></thead><tbody>${settingRows()}</tbody></table></div></div>
            <div class="case-paper-block"><div class="case-paper-block-header"><div><div class="case-paper-label">Trade lifecycle</div><h3>From signal to close</h3></div></div><div class="case-detail-grid case-lifecycle-grid"><article class="case-detail-card"><div class="case-detail-label">01 / Monitor</div><h3>Score the universe at EOD</h3><p>Recompute the walk-forward forecast, ATM IV, and variance edge for each name. A candidate proceeds only if its 25-35-day call-and-put pair is within 5% of spot and passes the mark, sizing, and buying-power checks. An accepted signal is entered at the next session&apos;s open.</p></article><article class="case-detail-card"><div class="case-detail-label">02 / Size</div><h3>Set contracts and reserve capacity</h3><p>Apply <code>N<sub>i</sub> = floor [ min ( B<sub>R</sub> / R<sub>i</sub>, B<sub>H</sub> / H<sub>i</sub>, B<sub>M</sub> / M<sub>i</sub> ) ]</code>. The three limits cap modeled stress loss, preserve room for future hedges, and check current portfolio buying power. A zero-sized candidate is skipped.</p></article><article class="case-detail-card"><div class="case-detail-label">03 / Open</div><h3>Enter and neutralize delta</h3><p>Buy the selected number of calls and puts at one strike and expiration. Calculate each leg&apos;s Black-Scholes delta, then set stock hedge = -100 &times; contracts &times; (call delta + put delta). The opening stock hedge brings the combined position back toward delta-neutral.</p></article><article class="case-detail-card"><div class="case-detail-label">04 / Rebalance</div><h3>Gamma-scalp through the holding path</h3><p>On every subsequent trading day, update spot, remaining time, IV marks, and option deltas. The model then adjusts the stock hedge to keep the combined position close to delta-neutral; those hedge trades are how the long-gamma position can benefit from stock movement.</p></article><article class="case-detail-card"><div class="case-detail-label">05 / Finance</div><h3>Monitor margin and buying power</h3><p>The research applies a 50% margin-rate proxy to short stock hedges, so 50% of short notional consumes buying power; a long stock hedge consumes 100% of notional. Long-option premium is debited, and the current option plus initial hedge requirement is included in <code>M<sub>i</sub></code>. Available capacity is checked before each new entry.</p></article><article class="case-detail-card"><div class="case-detail-label">06 / Close</div><h3>Apply exits and settle P&amp;L</h3><p>Close the straddle and unwind the hedge when the position has been held for 20 trading sessions or when the options have one day left before expiration as per the setups.</p></article></div></div>
          </div>
        </section>

        <section class="case-section case-section-paper" id="findings">
          <div class="content-width">
            <div class="section-bar"><div class="eyebrow">05 / Findings and attribution</div></div>
            <div class="case-paper-block"><div class="case-paper-block-header"><div><div class="case-paper-label">P&amp;L attribution</div><h3>What drives the return of the long straddle</h3></div></div></div>
            <div class="case-detail-grid case-attribution-grid"><article class="case-detail-card"><div class="case-detail-label">Gross option book</div><h3>+$112.1k</h3><p>Combined option-mark change before option execution costs; broken down into the four attribution components below.</p></article><article class="case-detail-card"><div class="case-detail-label">Stock hedge</div><h3>-$52.7k</h3><p>Cash result of daily delta rebalancing; it offsets the option book&apos;s +$52.7k first-order delta effect.</p></article><article class="case-detail-card"><div class="case-detail-label">Execution</div><h3>-$14.1k</h3><p>$12.1k of option costs plus $2.0k of stock-hedge costs under the modeled execution assumptions.</p></article><article class="case-detail-card"><div class="case-detail-label">Net result</div><h3>+$45.3k</h3><p>Gross option book plus stock hedge less execution costs.</p></article></div>
            <div class="case-greek-connectors" aria-label="Gross option book attribution">
              <span class="case-greek-branch" aria-hidden="true"></span>
              <span class="case-greek-branch" aria-hidden="true"></span>
              <span class="case-greek-branch" aria-hidden="true"></span>
              <span class="case-greek-branch" aria-hidden="true"></span>
              <div class="case-greek-connectors-label">Simplified sequential Black-Scholes attribution</div>
            </div>
            <div class="case-detail-grid case-greek-attribution-grid"><article class="case-detail-card case-greek-card"><div class="case-detail-label">Delta effect</div><h3>+$52.7k</h3><p>First-order option P&amp;L from stock movement.</p></article><article class="case-detail-card case-greek-card"><div class="case-detail-label">Gamma / convexity</div><h3>+$186.4k</h3><p>Nonlinear stock-movement P&amp;L after delta; the intended gamma-scalping source.</p></article><article class="case-detail-card case-greek-card"><div class="case-detail-label">Vega / IV repricing</div><h3>+$177.4k</h3><p>Option P&amp;L from changes in the call-and-put implied-volatility marks.</p></article><article class="case-detail-card case-greek-card"><div class="case-detail-label">Theta / time decay + residual</div><h3>-$304.4k</h3><p>Elapsed-time and carry effect, plus the residual reconciliation.</p></article></div>
            <div class="case-paper-block case-regime-summary"><div class="case-paper-block-header"><div><div class="case-paper-label">Regime interpretation</div><h3>Why the payoff concentrated and later flattened</h3></div></div><div class="case-regime-body"><p>During the April–May 2025 tariff-related shock regime, large and rapid stock moves create the main opportunity for the delta-hedged straddle. Rebalancing the stock hedge against a convex option position allows the book to capture gamma from movement. When the shock also lifts implied volatility, vega adds a second source of option value. Delta effect is largely neutralized by the stock hedge, while theta and execution costs continue to reduce the result.</p><p>As the market settles, daily movement tends to fall and implied volatility can normalize. Gamma capture and vega gains then weaken, whereas theta and hedge execution costs continue to accrue. The opposing effects leave the equity curve relatively flat.</p><p>The research implies that this is a conditional long-convexity allocation. It can benefit from an unexpected shock or a large volatility move, while the model&apos;s predicted edge is generally consumed by frictions and execution costs in ordinary conditions.</p></div></div>
          </div>
        </section>

        <section class="case-section case-section-tint" id="controls"><div class="content-width"><div class="section-bar"><div class="eyebrow">06 / Pitfalls & risk controls</div></div><div class="case-check-table">${checkRows(controls)}</div></div></section>

        <section class="case-section case-section-dark" id="risks">
          <div class="content-width">
            <div class="section-bar"><div class="eyebrow">07 / Remaining risks and next steps</div></div>
            <div class="case-risk-layout"><div><h2>Open research items</h2></div><div class="case-risk-list"><div class="case-risk-row"><span class="case-risk-number">01</span><div><h3>Regime concentration</h3><p>Positive P&amp;L clustered around the April-May 2025 volatility regime. A longer history covering different volatility regimes should be tested to determine whether the result generalizes.</p></div></div><div class="case-risk-row"><span class="case-risk-number">02</span><div><h3>Mark quality</h3><p>Daily trade-bar closes and modeled spreads are useful research proxies, but live implementation would require point-in-time best bid and offer (BBO), queue position, fills, and borrow or margin rules.</p></div></div></div></div>
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
      { date: '2025-04-02', label: 'Apr 2' },
      { date: '2025-04-09', label: 'Apr 9' }
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
      var max = mode === 'equity' ? Math.max(1.5, maxValue + .03) : .01;
      var ticks = mode === 'equity'
        ? [1, 1.1, 1.2, 1.3, 1.4, 1.5].filter(function (tick) { return tick >= min && tick <= max; })
        : [0, -.05, -.10, -.15, -.20].filter(function (tick) { return tick >= min && tick <= max; });
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
