<template>
    <v-container class="white lighten-5">
        <v-row no-gutters style="border-style: solid; border-color:grey;margin: 13px; padding: 13px;">
            <v-col cols="8">
                <h1>Encontre seu carro sem precisar procurar em vários lugares </h1>
                <h3>Todos os carros anunciados em todas as plataformas presentes na cidade de Araras estão aqui</h3>
                <v-col cols="10">
                    <v-autocomplete solo ref="country" :items="carSearching" label="Busque por modelo"
                        placeholder="Busque por modelo" prepend-inner-icon="mdi-magnify" class="pt-6"></v-autocomplete>
                </v-col>


            </v-col>
            <v-col cols="4">
                <v-img src="../assets/carros.png" class="mt-12"></v-img>
            </v-col>
        </v-row>

        <v-row no-gutters>
            <v-card class="mx-auto" max-width="280" outlined v-for="car in cars" :key="car.item" style="margin: 16px;">
                <v-img height="250"
                    src="https://s2.glbimg.com/F4toFeXkXB-BzzgyFjkBt-tQ7j4=/0x0:620x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/1/O/cWkaHpT3Gh3f1blXCwBw/2015-03-05-renault-sandero-5.jpg">
                </v-img>
                <v-row no-gutters>
                    <v-card-title>{{ car.item }} </v-card-title>
                    <v-icon medium color="black darken-2">
                        mdi-cards-heart-outline
                    </v-icon>
                </v-row>
                <v-card-text>
                    <div class="text-subtitle-2 mb-2">
                        Facebook.com
                    </div>

                    <div class="text-subtitle-1 font-weight-bold black--text mb-2">
                        R$31,900
                    </div>

                    <v-row no-gutters>
                        <span class="mr-2">2010</span><span class="mr-2">flex</span><span class="mr-2">prata</span>
                    </v-row>

                </v-card-text>


            </v-card>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Index',

    data: () => ({
        carSearching: ["Sandero", "Corsa", "Fiesta", "Cruze"],
        cars: [
            { item: 'Sandero1' }, { item: 'Sandero2' },
            { item: 'Sandero3' }, { item: 'Sandero4' },
            { item: 'Sandero5' }, { item: 'Sandero6' },
            { item: 'Sandero7' }, { item: 'Sandero8' },
            { item: 'Sandero9' }, { item: 'Sandero9' },
            { item: 'Sandero10' },
        ]
    })
}

</script>
