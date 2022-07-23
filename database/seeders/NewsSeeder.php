<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\News;
use Illuminate\Support\Facades\DB;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        for ($i = 0; $i < 10; $i++) {
            DB::table('news')->insert([
                'title' => fake()->title(),
                'deskripsi' => fake()->text(),
                'category' => fake()->word(2, true),
                'author' => fake()->name(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}