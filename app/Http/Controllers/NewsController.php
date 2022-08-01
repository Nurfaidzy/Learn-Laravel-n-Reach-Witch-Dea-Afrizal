<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(8));
        return Inertia::render(
            'Homepage',
            [
                'title' => 'News',
                'message' => 'Welcome to this page',
                'news' => $news,
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $news = News::create($request->all());
        $news->title = $request->title;
        $news->deskripsi = $request->deskripsi;
        $news->category = $request->category;
        $news->author = auth()->user()->email;
        $news->save();
        return redirect()->back()->with('massage', 'Berhasil menambahkan berita');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function show(News $news)
    {
        //
        $news = News::where('author', auth()->user()->email)->get();

        return Inertia::render(
            'Dashboard',
            [
                'mynews' => $news,
            ]

        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function edit(News $news, Request $request)
    {
        //
        return Inertia::render(
            'EditNews',
            [
                'newse' => $news->find($request->id)
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, News $news)
    {
        //
        $updatenews = News::where('author', auth()->user()->email)->update([
            'title' => $request->title,
            'deskripsi' => $request->deskripsi,
            'category' => $request->category,
        ]);
        return to_route('dashboard')->with('massage', 'Berhasil mengubah berita');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function destroy(News $news)
    {
        //
    }
}