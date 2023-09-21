const PreviousPIW = () => {
  return (
    <div className='media-block theme-bg-primary py-5'>
      <div NameclassName='container'>
        <h4 class='text-white text-center mb-3'>Previously</h4>
        <div class='section-intro text-center single-col-max mx-auto text-white mb-5'>
          Have a look at our previous Pwani Innovation Week Videos and Snaps
        </div>
        <div className='row gx-md-5'>
          <div className='col-12 col-md-6 mb-3'>
            <div class='ratio ratio-16x9'>
              <iframe
                title='pre'
                src='https://www.youtube.com/embed/vZkYJ5IZlJM?si=CwvlSL62DiR7-TDO'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className='col-12 col-md-6 mb-md-5'>
            <div className='ratio ratio-16x9'>
              <iframe
                title='pre'
                // width={"30px"}
                src='https://www.youtube.com/embed/BFcBapJeS5M?si=ERles6T64GgbvB3B'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
            {/* <!--//embed-responsive --> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreviousPIW
