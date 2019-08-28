var numIslands = function(grid) {
    let count = 0

    for(let i=0;i<grid.length;i++){
        for(let k=0;k<grid[i].length;k++){
            if(grid[i][k] === '1'){
                count += 1
                dfs(i,k,grid)
            }
        }
    }
    return count
};

function dfs(i,j,grid){
    if(i<0 || i>grid.length-1 || j<0 || j >grid[0].length-1){
        return
    }else if(grid[i][j] === '0'){
        return
    }else{
        grid[i][j] = '0';
        dfs(i,j+1,grid)
        dfs(i+1,j,grid)
        dfs(i-1,j,grid)
        dfs(i,j-1,grid)
    }
}
